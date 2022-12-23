AFRAME.registerComponent("tour", {
    init: function(){
        this.places = this.el
        this.createCards()
    },
    createCards: function(){
        var places2 = [
            {
                id: "taj_mahal", 
                title:"Taj mahal",
                url: "./Taj_Mahal_in_India_-_Kristian_Bertel.jpg"
            },
            {
                id: "red_fort",
                title:"Red Fort",
                url:"./pjimage-2022-03-24T110223.513.webp"
            }
        ]
        var pos = -4.5;
        for(var i in places2){
            const posX = pos + 3;
            const posY = -0.5;
            const posZ = -3;
            const position = {x: posX, y:posY, z:posZ};
            pos = posX;         
            const border = this.createBorder(position, i.id)
            const item = this.createItem(i);
            border.appendChild(item);
            const title = this.createTitles(i, posX, posY - 1, posZ);
            border.appendChild(title);
            this.places.appendChild(border) 
        } 
    },
    createBorder: function(position, id){
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("id", id);
        entityEl.setAttribute("visible", true);
        entityEl.setAttribute("geometry", {primitive: "ring", radiusInner: 1.1})
        entityEl.setAttribute("position", position)
        entityEl.setAttribute("material", {color: "red"})
        return entityEl;
    },
    createItem: function(i){
        const El = document.createElement("a-entity");
        El.setAttribute("visible", true)
        El.setAttribute("geometry", {primitive: "circle", radius:1.1})
        El.setAttribute("material", {src: i.url})
        return El
    },
    createTitles: function(i, posx, posy, posz){
        const txt = document.createElement("a-entity");
        txt.setAttribute("visible", true)
        txt.setAttribute("text", {value: i.title, color:"grey"})
        txt.setAttribute("position", {x:posx, y:posy, z:posz})
        return txt
    }
})