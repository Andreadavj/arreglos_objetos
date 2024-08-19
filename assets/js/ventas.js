const mainVentas = [    
    {
    id: 1,
    img: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    titulo: "Apartamento de lujo en zona exclusiva",
    description:
      "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
    ubicacion: "123 Luxury Lane, Prestige Suburb, CA 45678",
    habitaciones: 4,
    banios: 1,
    precio: 2000,
    fumar: true,
    mascota: false,
  },
  {
    id: 2,
    img: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    titulo: "Apartamento acogedor en la montaña",
    description:
      "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
    ubicacion: " 789 Mountain Road, Summit Peaks, CA 23456",
    habitaciones: 3,
    banios: 3,
    precio: 5000,
    fumar: "",
    mascota: "",
  },
  {
    id: 3,
    img: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    titulo: "Penthouse de lujo con terraza panorámica",
    description:
      "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
    ubicacion: " 567 Skyline Avenue, Skyview City, CA 56789",
    habitaciones: 3,
    banios: 3,
    precio: 5000,
    fumar: true,
    mascota: false,
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
    titulo: "Apartamento en el centro de la ciudad",
    description:
      "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
    ubicacion: " 123 Main Street, Anytown, CA 91234",
    habitaciones: 5,
    banios: 2,
    precio: 5000,
    fumar: false,
    mascota: true,
  },
];
  
  

  let htmlVentas = "";
  for (let mainVenta of mainVentas) {
      htmlVentas += `
          <div class="col-md-4 mb-4">
              <div class="card">
              <img src="${mainVenta.img}" class="card-img-top"
                  alt="Imagen del departamento"/>
                  <div class="card-body">
                      <h5 class="card-title">${mainVenta.titulo}</h5>
                      <p class="card-text">${mainVenta.description}</p>
                      <p>
                          <i class="fas fa-map-marker-alt"></i>${mainVenta.ubicacion}</p>
                      <p>
                          <i class="fas fa-bed"></i>${mainVenta.habitaciones} Habitaciones
                          <i class="fas fa-bath"></i>${mainVenta.banios} Baños
                      </p>
                      <p><i class="fas fa-dollar-sign"></i>${mainVenta.precio}</p>
                      <p class="${mainVentas.fumar ? "text-success" : "text-danger"}">
                      <i class="${mainVentas.fumar ? "fas fa-smoking" : "fas fa-smoking-ban"}"></i>
                      ${mainVentas.fumar ? "Permitido fumar" : "No se permite fumar"}</p>
                      <p class="${mainVentas.mascota ? "text-success" : "text-danger"}">
                      <i class="${mainVentas.mascota ? "fas fa-paw" : "fa-solid fa-ban"}"></i>
                      ${mainVentas.mascota ? "Mascotas permitidas" : "No se permite mascotas"}</p>
                  </div>
              </div>
          </div>
      `
  }
  
  document.getElementById("enventa").innerHTML = htmlVentas;