const contentContainer = document.querySelectorAll('.content-container');

contentContainer.forEach(function(container){
    container.addEventListener('click', function(e){
        
        e.currentTarget.classList.toggle('is-active')

        contentContainer.forEach(function(check){
            if(e.currentTarget !== check) {
                check.classList.remove('is-active');
            }
        })

    })
})