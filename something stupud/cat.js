AFRAME.registerComponent("cat",{
    init:function(){
     this.catContainer = this.el
     this.cat()
    },
    cat:function(){
        const catRef =[
            {
                id:"cat1",
                url:"./kot.jpg"
            },
            {
                id:"cat2",
                url:"./yippie.jpg"
            },
            {
                id:"cat3",
                url:"./erm.png"
            }
        ]
        let previousXPosition = -60
        for(var item of catRef){
            const posX=previousXPosition+25
            const posY =10
            const posZ=-40
            const position={x:posX,y:posY,z:posZ}
            previousXPosition=posX
            const borderEl=this.createBorder(position,item.id)
            const cat=this.createCat(item)
            borderEl.appendChild(cat)
            this.catContainer.appendChild(borderEl)
        }
    },
    createBorder:function(position,id){
        const entityEl=document.createElement("a-entity")
        entityEl.setAttribute("id",id)
        entityEl.setAttribute("visible",true)
        entityEl.setAttribute("geometry",{primitive:"plane",width:22,height:40})
        entityEl.setAttribute("position",position)
        entityEl.setAttribute("material",{color:"#d4244d"})
        return entityEl
    },
    createCat:function(item){
        const entityEl=document.createElement("a-entity")
        entityEl.setAttribute("visible",true)
        entityEl.setAttribute("geometry",{primitive:"plane",width:20,height:28})
        entityEl.setAttribute("position",{x:6,y:10,z:10})
        entityEl.setAttribute("material",{src:item.url})
        return entityEl
    }
})