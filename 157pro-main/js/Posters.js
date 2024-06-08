AFRAME.registerComponent("comics-posters", {
  init: function() {
    this.postersContainer = this.el;
    this.posters();
  },

  posters: function() {
    const postersRef = [
      {
        id: "superman",
        url: "./assets/posters/superman-poster.jpg"
      },
      {
        id: "spiderman",
        url: "./assets/posters/spiderman-poster.jpg"
      },

      {
        id: "captain-aero",
        url: "./assets/posters/captain-aero-poster.jpg"
      },
      {
        id: "outer-space",
        url: "./assets/posters/outer-space-poster.jpg"
      }
    ];
    let prevoiusXPosition = -60;

    for (var item of postersRef) {
      const posX = prevoiusXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;

      // Border Element
      const borderEl = this.createBorder(position, item.id);

      // Poster Element
      const poster = this.createPoster(item);


     //task 1:-make the poster as a child of borderEl
     borderEl.appendChild(posterEl)

      this.postersContainer.appendChild(borderEl);
    }
  },
  createBorder: function(position, id) {

    //task 2:- create an entity and store in entityEl as a const
    const entityEl = document.createElement("a-entity")
    entityEl.setAttribute("id", id);
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("geometry", {
      primitive: "plane",
      width: 22,
      height: 40
    });

    entityEl.setAttribute("position", position);
    entityEl.setAttribute("material", { color: "#fff" });

    return entityEl;
  },
  createPoster: function(item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("geometry", {
      primitive: "plane",
      width: 20,
      height: 28
    });

    entityEl.setAttribute("position", { x: 0, y: 5, z: 0.1 });

    //task 3:-
    //entityEl.setAttribute("material", { src: item });
     //entityEl.setAttribute("image", { src: item.url });
      //entityEl.setAttribute("material", { src= item.url });
       entityEl.setAttribute("material", { src: item.url });

    return entityEl;
  }
});
