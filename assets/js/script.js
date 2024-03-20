// htmlde ki experinces ve projectBody isimli classları yakaladım.

const experinces = document.querySelector(".experinces");
const projects = document.querySelector(".projectsBody");

// skills jsonunda ki veriyi çekmek için getItem1 fonksiyonunu oluşturdum. 
async function getItem1() {
          const response = await fetch("assets/json/skills.json");
          const data = await response.json();
          // console.log(data);
          return data;
}

// jsonda ki veriyi listelemek için bu fonksiyonu oluşturdum.
async function listItem1() {
          const data = await getItem1();
          // console.log(data);
          for (const veri of data) {
                    experinces.innerHTML += 
                    `
                    <div class="experince">
                              <h1 class="experinceHeader">${veri.name}</h1>
                              <span class="experinceSpan">${veri.experience}</span>
                    </div>
                    `   
          }
}

// project jsonunda ki veriyi çekmek için getItem2 fonksiyonunu oluşturdum.
async function getItem2() {
          const response = await fetch("assets/json/projects.json");
          const data = await response.json();
          // console.log(data);
          return data;
}

// jsonda ki veriyi listelemek için bu fonksiyonu oluşturdum.
async function listItem2(){
          const data = await getItem2();
          // console.log(data);
          for (const veri of data) {
                    projects.innerHTML += 
                    `
                    <div class="products">
                         <img src="${veri.photo}" alt="" class="img">
                         <h3 class="app">${veri.title}</h3>
                         <div class="languages">
                              <span>${veri.categories}</span>
                         </div>
                         <div class="view">
                              <a href="#" class="projectView">VIEW PROJECT</a>
                              <a href="#" class="projectView">VIEW CODE</a>
                         </div>
                    </div>
                    `
          }
}
// listItem2 fonksiyonunu çağırarak veriyi listeliyorum.
listItem2()
// listItem1 fonksiyonunu çağırarak veriyi listeliyorum.
listItem1()
