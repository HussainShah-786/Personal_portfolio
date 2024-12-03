/*==============typing Animation===================*/
var typed = new Typed(".typing", {
    strings:[" ","Web Designer","Web Developer","Graphic Designer","Freelancer","Youtuber"],
    typeSpeed:100,
    BackSpeed:60,
    // BackDelay: 1000,
    loop:true
});
/*=====================Aside=========================*/
const nav = document.querySelector(".nav"),
navList = nav.querySelectorAll("li"),
totalNavList = navList.length,
allSection = document.querySelectorAll(".section"),
totalSection = allSection.length;
for(let i=0; i<totalNavList; i++)
{
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function()
    {
        // for(let i=0; i<totalSection; i++)
        //     {
        //         allSection[i].classList.remove("back-section");
        //     }
        removeBackSection();
        for(let j=0; j<totalNavList; j++)
        {
            if(navList[j].querySelector("a").classList.contains("active"))
            {
                // console.log("back-section" + navList[j].querySelector("a"))
                // allSection[j].classList.add("back-section");
                addBackSection(j);
            }
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active")
        showSection(this);
        if(window.innerWidth < 1200)
        {
            asideSectionTogglerBtn();
        }
    })
}
function removeBackSection()
{
    for(let i=0; i<totalSection; i++)
    {
        allSection[i].classList.remove("back-section");
    }
}
function addBackSection(num)
{
    allSection[num].classList.add("back-section");
}
function showSection(element)
{
    for(let i=0; i<totalSection; i++)
    {
        allSection[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#"+ target).classList.add("active")
}
function updateNav(element)
{
    for(let i=0; i<totalNavList; i++)
    {
        navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];
        if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1])
        {
            navList[i].querySelector("a").classList.add("active");
        }
    }
}
document.querySelector(".hire-me").addEventListener("click", function ()
{
    const sectionIndex = this.getAttribute("data-section-index");
    //console.log(sectionIndex);
  showSection(this);
  updateNav(this);
  removeBackSection();
  addBackSection(sectionIndex);
})
const navTogglerBtn = document.querySelector(".nav-toggler"),
     aside = document.querySelector(".aside");
     navTogglerBtn.addEventListener("click", () =>
    {
        asideSectionTogglerBtn();
    })
     function asideSectionTogglerBtn()
        {
            aside.classList.toggle("open");
            navTogglerBtn.classList.toggle("open");
            for(let i=0; i<totalSection; i++)
            {
                allSection[i].classList.toggle("open");
            }
        }
// JS Code for Email js starts from here //
const contactForm = document.querySelector("#contact-form");
const submitBtn = document.querySelector("#submit-btn");
const nameInput = document.querySelector("#user_name");
const emailInput = document.querySelector("#user_email");
const subjectInput = document.querySelector("#subject");
const messageInput = document.querySelector("#message");

const publicKey = "mIVEqC5zrU36d5jyn";
const serviceID = "service_yunrv0n";
const templateID = "template_3gfxoe8";

// Initialize emailjs
emailjs.init(publicKey);

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  submitBtn.innerText = "Just A Moment...";
  submitBtn.disabled = true;

  const inputFields = {
    user_name: nameInput.value,
    user_email: emailInput.value,
    subject: subjectInput.value,
    message: messageInput.value,
  };

  // Validate form fields
  if (!nameInput.value || !emailInput.value || !subjectInput.value || !messageInput.value) {
    alert("Please fill out all fields.");
    submitBtn.innerText = "Send Message";
    submitBtn.disabled = false;
    return;
  }

  emailjs.send(serviceID, templateID, inputFields).then(
    () => {
      submitBtn.innerText = "Message Sent Successfully";
      submitBtn.disabled = false;
      contactForm.reset();
    },
    (error) => {
      console.error("Error sending email:", error);
      alert("Something went wrong. Please try again later.");
      submitBtn.innerText = "Send Message";
      submitBtn.disabled = false;
    }
  );
});
// JS Code for Email js ends here //