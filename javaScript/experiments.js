// document.addEventListener('mousemove', (event) => {
//     const follower = document.getElementById('follower');
//     const disciples = document.getElementById("disciples");
//     // Update the position of the follower
//     follower.style.left = `${event.pageX}px`;
//     follower.style.top = `${event.pageY}px`;
//     disciples.style.left = `${event.pageX}px`;
//     disciples.style.top = `${event.pageY}px`;
//   });
  const drag= ()=>{
    const follower = document.getElementById('follower');
        const disciples = document.getElementById("disciples");
       // Update the position of the follower
       follower.style.left = `${event.pageX}px`;
       follower.style.top = `${event.pageY}px`;
      disciples.style.left = `${event.pageX}px`;
     disciples.style.top = `${event.pageY}px`;
  };
  let numbers = [1,2,3,4,5];
  console.log(numbers[0]);