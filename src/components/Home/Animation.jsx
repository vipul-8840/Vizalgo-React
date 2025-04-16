
//animation function implemented 
export  function Animation(animation, speed, setIsSpeed,refs,timeoutIds) {
    for (let i = 0; i < animation.length; i++) {
        const step = animation[i];
        const timeoutId = setTimeout(() => {
            if (step.type === "compare") {
                const [i1, i2] = step.indices;
                refs.current[i1].style.backgroundColor = 'yellow';
                refs.current[i2].style.backgroundColor = 'yellow';
            }
            else if (step.type === "swap") {
                const [i1, i2] = step.indices;
                refs.current[i1].style.backgroundColor = 'red';
                refs.current[i2].style.backgroundColor = 'red';

                const tempHeight = refs.current[i1].style.height;
                refs.current[i1].style.height = refs.current[i2].style.height;
                refs.current[i2].style.height = tempHeight;

                const tempText = refs.current[i1].innerText;
                refs.current[i1].innerText = refs.current[i2].innerText;
                refs.current[i2].innerText = tempText;
            }
            else if (step.type === "revert") {
                const [i1, i2] = step.indices;
                refs.current[i1].style.backgroundColor = 'blue';
                refs.current[i2].style.backgroundColor = 'blue';
            }
            else if (step.type === "sorted") {
                const i1 = step.index;
                refs.current[i1].style.backgroundColor = 'green';
            }
        }, 4 * i * speed);
        timeoutIds.current.push(timeoutId); 
    }

    const finalTimeout = setTimeout(() => {
        setIsSpeed(false);
    }, 4 * animation.length * speed + 100);
    timeoutIds.current.push(finalTimeout); 
}
