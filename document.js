const MONTH_PATTERN = "janvier|février|fevrier|mars|avril|mai|juin|juillet|août|aout|septembre|octobre|novembre|décembre|decembre";
const DATE_PATTERN = new RegExp(`(?:^|\\n)\\s*(\\d{1,2})\\s+(${MONTH_PATTERN})\\s+(\\d{4})`, "i");

function firstColumnText(section) {
  return section.querySelector("div p")?.innerText.trim() || "";
}

function isSessionHeading(section) {
  const text = firstColumnText(section);
  if (!text || text.length > 180 || /\bLeçon\b/i.test(text)) return false;
  return DATE_PATTERN.test(text);
}

function cleanSessionTitle(section) {
  const cells = Array.from(section.querySelectorAll("div p")).map((cell) => cell.innerText.trim());
  const zh = cells[1] || "";
  const en = cells[2] || "";
  const fr = cells[0] || "";
  return [zh.split("\n")[0], en.split("\n")[0] || fr.split("\n")[0]].filter(Boolean).join(" / ");
}

function buildSessionIndex(groups) {
  const index = document.createElement("nav");
  index.className = "session-index";
  index.setAttribute("aria-label", "讨论时间目录 / Session index");

  const title = document.createElement("div");
  title.className = "session-index__title";
  title.textContent = "按讨论时间阅读 / Read by session";

  const controls = document.createElement("div");
  controls.className = "session-index__controls";

  const expand = document.createElement("button");
  expand.type = "button";
  expand.textContent = "全部展开";
  expand.addEventListener("click", () => {
    document.querySelectorAll(".session-group").forEach((group) => {
      group.open = true;
    });
  });

  const collapse = document.createElement("button");
  collapse.type = "button";
  collapse.textContent = "全部收起";
  collapse.addEventListener("click", () => {
    document.querySelectorAll(".session-group").forEach((group) => {
      group.open = false;
    });
  });

  controls.append(expand, collapse);

  const links = document.createElement("div");
  links.className = "session-index__links";
  groups.forEach((group) => {
    const link = document.createElement("a");
    link.href = `#${group.id}`;
    link.textContent = group.title;
    link.addEventListener("click", () => {
      const target = document.getElementById(group.id);
      if (target) target.open = true;
    });
    links.append(link);
  });

  index.append(title, controls, links);
  return index;
}

function groupBySession() {
  const main = document.querySelector("main");
  if (!main || main.dataset.sessionGrouped === "true") return;

  const paragraphs = Array.from(main.querySelectorAll(":scope > section.paragraph"));
  if (paragraphs.length < 4) return;

  const groups = [];
  let current = { title: "导言与目录 / Front matter", sections: [] };

  paragraphs.forEach((section) => {
    if (isSessionHeading(section) && current.sections.length > 0) {
      groups.push(current);
      current = { title: cleanSessionTitle(section), sections: [section] };
      return;
    }

    if (isSessionHeading(section) && current.sections.length === 0) {
      current.title = cleanSessionTitle(section);
    }
    current.sections.push(section);
  });

  if (current.sections.length > 0) groups.push(current);
  if (groups.length < 2) return;

  main.dataset.sessionGrouped = "true";
  main.replaceChildren();

  const normalizedGroups = groups.map((group, index) => ({
    ...group,
    id: `session-${index + 1}`,
    title: group.title || `Session ${index + 1}`,
  }));

  main.append(buildSessionIndex(normalizedGroups));

  normalizedGroups.forEach((group, index) => {
    const details = document.createElement("details");
    details.className = "session-group";
    details.id = group.id;
    if (index === 0) details.open = true;

    const summary = document.createElement("summary");
    const heading = document.createElement("span");
    heading.className = "session-group__title";
    heading.textContent = group.title;

    const count = document.createElement("span");
    count.className = "session-group__count";
    count.textContent = `${group.sections.length} 段`;

    summary.append(heading, count);

    const body = document.createElement("div");
    body.className = "session-group__body";
    group.sections.forEach((section) => body.append(section));

    details.append(summary, body);
    main.append(details);
  });
}

document.addEventListener("DOMContentLoaded", groupBySession);
