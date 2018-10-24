const addSwaggerLinksToEureka = () => {
  const instances = [...document.querySelectorAll('#instances tr a:not(.swagger-link-added)')];
  instances.map(el => {
    const theLink = el.href;
    const splitted = theLink.split('/');

    el.outerHTML = `
    <span>
      <a href='${el.href}' target='_blank'>${el.innerText}</a>
      <a href='${`${splitted[0]}//${splitted[2]}/swagger-ui.html`}' style='color:#000;'>[swagger]</a>
      <a href='${`${splitted[0]}//${splitted[2]}/ff4j-console/`}' style='color:#000;'>[FF4J Console]</a>
    </span>
    `
  })
}

if (document.title === 'Eureka') {
  addSwaggerLinksToEureka();
}
