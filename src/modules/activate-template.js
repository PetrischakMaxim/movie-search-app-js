export default function activateTemplate(template) {
  const cloneTemplate = template.content
    .querySelector('.glide__slide')
    .cloneNode(true);
  return cloneTemplate;
}
