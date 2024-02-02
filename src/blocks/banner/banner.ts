export default function (block: HTMLElement) {
  const org_content = block.innerHTML;
  console.log(block);
  block.innerHTML = `<div>hi</div>`;
  block.style.removeProperty("display");
}