const mainAlquiler = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
      titulo: "Apartamento en el centro de la ciudad",
      description:
        "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
      ubicacion: " 123 Main Street, Anytown, CA 91234",
      habitaciones: 4,
      banios: 1,
      precio: 2000,
      fumar: false,
      mascota: true,
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      titulo: "Apartamento luminoso con vista al mar",
      description:
        "Este hermoso apartamento ofrece una vista impresionante al mar",
      ubicacion: " 456 Ocean Avenue, Seaside Town, CA 56789",
      habitaciones: 3,
      banios: 3,
      precio: 5000,
      fumar: true,
      mascota: false,
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
      titulo: "Condominio moderno en zona residencial",
      description:
        "Este elegante condominio moderno está ubicado en una tranquila zona residencial",
      ubicacion: " 123 Main Street, Anytown, CA 91234",
      habitaciones: 5,
      banios: 2,
      precio: 5000,
      fumar: true,
      mascota: true,
    },
    {
      id: 4,
      img: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
      titulo: "Penthouse de lujo con terraza panorámica",
      description:
        "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
      ubicacion: " 567 Skyline Avenue, Skyview City, CA 56789",
      habitaciones: 2,
      banios: 1,
      precio: 2000,
      fumar: false,
      mascota: false,
    },
   ];

  let htmlAlquiler = "";
  for (let mainAlquila of mainAlquiler){
    htmlAlquiler += `
          <div class="col-md-4 mb-4">
              <div class="card">
              <img src="${mainAlquila.img}" class="card-img-top"
                  alt="Imagen del departamento"/>
                  <div class="card-body">
                      <h5 class="card-title">${mainAlquila.titulo}</h5>
                      <p class="card-text">${mainAlquila.description}</p>
                      <p>
                          <i class="fas fa-map-marker-alt"></i>${mainAlquila.ubicacion}</p>
                      <p>
                          <i class="fas fa-bed"></i>${mainAlquila.habitaciones} Habitaciones
                          <i class="fas fa-bath"></i>${mainAlquila.banios} Baños
                      </p>
                      <p><i class="fas fa-dollar-sign"></i>${mainAlquila.precio}</p>
                      <p class="${mainAlquila.fumar ? "text-success" : "text-danger"}">
                      <i class="${mainAlquila.fumar ? "fas fa-smoking" : "fas fa-smoking-ban"}"></i>
                      ${mainAlquila.fumar ? "Permitido fumar" : "No se permite fumar"}</p>
                      <p class="${mainAlquila.mascota ? "text-success" : "text-danger"}">
                      <i class="${mainAlquila.mascota ? "fas fa-paw" : "fa-solid fa-ban"}"></i>
                      ${mainAlquila.mascota ? "Mascotas permitidas" : "No se permite mascotas"}</p>
                  </div>
              </div>
          </div>
      `
  }
  
  
  document.getElementById("enalquiler").innerHTML = htmlAlquiler;