console.log("Script.JS Loaded");

let correct_ans = ['B','A','A','A'];
const form =document.querySelector('.quiz-form');
const result =document.querySelector('.result');

form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    const user_ans = [form.q1.value,form.q2.value,form.q3.value,form.q4.value];

    // Checking Ans
    user_ans.forEach((ans,index)=> {
        if (ans === correct_ans[index]) {
            score += 25;
        }
    });
    // scroll up
    window.scrollTo(0,0);

    // Result Output
    console.log(score);
    result.querySelector('span').textContent = `${score}%`;
    result.classList.remove('d-none');

    // Result Animation
    let output = 0;
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${output}%`;
        if(output === score){
            clearInterval(timer);
        }
        else{
            output++;
        }
    },20);
});
