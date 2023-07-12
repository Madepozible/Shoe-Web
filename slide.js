    //FEATURE PART
    let scrollContainer = document.querySelector(".gallery");
    let backBtn = document.getElementById("backBtn");
    let nextBtn = document.getElementById("nextBtn");
    
    
    scrollContainer.addEventListener("wheel", (evt) => {
        evt.preventDefault();
        scrollContainer.scrollLeft += evt.deltaY;
    });
    
    nextBtn.addEventListener("click", ()=>{
        scrollContainer.computedStyleMap.scrollBehaviior = "smooth";
        scrollContainer.scrollLeft += 900;
    });
    
    backBtn.addEventListener("click", ()=>{
        scrollContainer.computedStyleMap.scrollBehaviior = "smooth";
        scrollContainer.scrollLeft += 900;
    });
    
        //END OF FEATURE PART