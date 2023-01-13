let gallary = document.querySelector('ul')
let wrapper = document.querySelector('.gal')
let moveVal = 0

let dragging = false, mouseLocation, gallaryLocation


const easeOutQuat = t => {
    return t * (2-t)
}


moveGallary  = () => {
    moveVal = easeOutQuat(window.scrollY  *.003)
    gallary.style.transform = `rotateZ(-5deg) translateX(${moveVal}%)`
    console.log(moveVal)

    requestAnimationFrame(moveGallary)
}

requestAnimationFrame(moveGallary)


const dragStart = e => {
    dragging = true
    mouseLocation = e.pageX    
    gallaryLocation = wrapper.scrollLeft
}

const dragActive = e => {
    if(!dragging) return
    
    let offset = e.pageX - mouseLocation
    wrapper.scrollLeft = gallaryLocation - offset
}


const dragStop = e => {
    dragging = false
    mouseLocation = e.pageX    
    gallaryLocation = wrapper.scrollLeft
}

gallary.addEventListener('mousedown', dragStart)
gallary.addEventListener('mousemove', dragActive)
gallary.addEventListener('mouseup', dragStop)