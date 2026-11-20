import assert from "node:assert/strict";
import test from "node:test";

import { readFile } from "node:fs/promises";
import ts from "typescript";
async function loadTypeScript(relativePath) {
  const source = await readFile(new URL(relativePath, import.meta.url), "utf8");
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.ES2022,
      target: ts.ScriptTarget.ES2022,
    },
  });
  return import(
    `data:text/javascript;base64,${Buffer.from(outputText).toString("base64")}`
  );
}
const { selectActiveSection } = await loadTypeScript(
  "../app/lib/navigation-state.ts",
);
const { filterProjects } = await loadTypeScript("../app/lib/project-filter.ts");

test("active section clears when returning to the hero", () => {
  assert.equal(
    typeof selectActiveSection,
    "function",
    "Navigation state helper must be implemented",
  );
  assert.equal(
    selectActiveSection(
      [
        { id: "top", top: 91 },
        { id: "projects", top: 960 },
        { id: "contact", top: 4200 },
      ],
      115,
      false,
    ),
    "",
  );
});
test("a long project section stays active until the next section reaches the header", () => {
  assert.equal(typeof selectActiveSection, "function");
  assert.equal(
    selectActiveSection(
      [
        { id: "top", top: -1000 },
        { id: "projects", top: -600 },
        { id: "about", top: 300 },
      ],
      115,
      false,
    ),
    "projects",
  );
  assert.equal(
    selectActiveSection(
      [
        { id: "top", top: -1000 },
        { id: "projects", top: -600 },
        { id: "about", top: 114 },
      ],
      115,
      false,
    ),
    "about",
  );
});
test("short contact section is selected at the bottom and resume is not mislabelled as Skills", () => {
  assert.equal(typeof selectActiveSection, "function");
  assert.equal(
    selectActiveSection(
      [
        { id: "skills", top: -600 },
        { id: "resume", top: 100 },
        { id: "contact", top: 400 },
      ],
      115,
      true,
    ),
    "contact",
  );
  assert.equal(
    selectActiveSection(
      [
        { id: "skills", top: -600 },
        { id: "resume", top: 100 },
        { id: "contact", top: 400 },
      ],
      115,
      false,
    ),
    "",
  );
});
test("platform filtering includes all records, correct platforms, and empty results without mutating input", () => {
  assert.equal(
    typeof filterProjects,
    "function",
    "Project filtering helper must be implemented",
  );
  const records = Object.freeze([
    { id: "helios", category: "Systems" },
    { id: "finance", category: "Web" },
    { id: "jobs", category: "Mobile" },
  ]);
  assert.deepEqual(
    filterProjects(records, "All projects").map((x) => x.id),
    ["helios", "finance", "jobs"],
  );
  assert.deepEqual(
    filterProjects(records, "Web").map((x) => x.id),
    ["finance"],
  );
  assert.deepEqual(
    filterProjects(records, "Mobile").map((x) => x.id),
    ["jobs"],
  );
  assert.deepEqual(filterProjects([], "Mobile"), []);
  assert.deepEqual(
    filterProjects(records, "Systems").map((x) => x.id),
    ["helios"],
  );
  assert.equal(records.length, 3);
});

test("clipboard feedback waits for completion and reports rejection or missing support", async () => {
  const { copyText } = await loadTypeScript("../app/lib/clipboard.ts").catch(
    () => ({}),
  );
  assert.equal(
    typeof copyText,
    "function",
    "Clipboard result helper must be implemented",
  );
  let finish;
  let settled = false;
  const clipboard = {
    writeText: async (value) => {
      assert.equal(value, "starkjhakeem@gmail.com");
      await new Promise((resolve) => {
        finish = resolve;
      });
    },
  };
  const pending = copyText("starkjhakeem@gmail.com", clipboard).then(
    (result) => {
      settled = true;
      return result;
    },
  );
  await Promise.resolve();
  assert.equal(
    settled,
    false,
    "Success must not be reported before the write resolves",
  );
  finish();
  assert.equal(await pending, "copied");
  assert.equal(
    await copyText("email", {
      writeText: async () => {
        throw new Error("Permission denied");
      },
    }),
    "failed",
  );
  assert.equal(await copyText("email", undefined), "failed");
});

// Prevent private project material from becoming a public source or image link.
test("the proprietary flagship exposes only its approved overview", async () => {
  const { projects } = await loadTypeScript("../app/data/portfolio.ts");
  const flagship = projects[0];
  assert.equal(flagship.id, "helios");
  assert.equal(flagship.access, "proprietary");
  assert.equal(flagship.category, "Systems");
  for (const key of ["github", "demo", "image", "imageAlt"])
    assert.equal(flagship[key], undefined);
  assert.deepEqual(
    projects.map((project) => project.id),
    ["helios", "finance", "jobs"],
  );
});
