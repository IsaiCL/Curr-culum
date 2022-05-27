//Aqui llamamos el json que subimos al github.
let jsonUrl = 'https://raw.githubusercontent.com/IsaiCL/cvjsons/master/cvjson.json';


if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register("/service-worker.js");
}

//funcion para cargar el json.
function cargarJson (){
    fetch(jsonUrl)
    .then(respuesta =>respuesta.json()) //indicamos el formato en que se desea obtener.
    .then(informacion => mostrarDato(informacion))//mostramos informacion.
    .catch(error => console.log(error)) 
};
cargarJson();

myCV = `
   <div id="page-wrap">

        <img src="images/Isai_image.jpg" alt="Photo of me" id="pic" />

        <div id="contact-info" class="vcard">

            <h1 class="fn">
                <Font color="darkblue">{nombre}</Font>
            </h1>

            <h2>Contact information</h2>
            <p>
                <br>
                Cellphone: <span class="tel">{telefono}</span>
                <br>
                <br>                
                Date of birth: <span class="tel">{fecha}</span>
                <br>
                <br>
                E-mail: <a class="email">2005034@utrivieramaya.edu.mx</a>
                <br>
                <br>
                Required Position: <a class="socialnet">{position}</a>
                <br>
                <br>
            </p>
        </div>

        <h2>Summary</h2>

        <div id="objective">
            <p>
                {summary}
            </p>
            <br>
        </div>

        <div class="clear"></div>

        <dl>
            <dd class="clear"></dd>

            <dt>Education</dt>
            <dd>
                <h3>Universidad Tecnológica de la Riviera Maya</h3>
                <h5></h5>
                <p><strong>Date:</strong> 2020-2022 </p>
            </dd>

            <dd class="clear"></dd>

            <dt>Skills</dt>
            <dd>
                <h3>Languages</h3>
                <ul>
                    {lenguages}
                </ul>

                <h3>Databases</h3>
                <ul>
                    {database}
                </ul>

                <h3>Frameworks</h3>
                <ul>
                    {frame}
                </ul>

                <h3>Parcel Officce</h3>
                    {office}
            </dd>

            <dd class="clear"></dd>

            <dt>Work Experience</dt>
            <dd>
                <h3>Job</h3>
                <ul>
                    {workE}
                </ul>

                <h3>Position</h3>
                <ul>
                    {workdos}
                </ul>

            </dd>

            <dd class="clear"></dd>

            <dt>Education</dt>
            <dd>
                <h3>School</h3>
                <ul>
                    {education}
                </ul>
            </dd>
            

            <dd class="clear"></dd>
        </dl>

        <div class="clear"></div>

    </div>
`


function mostrarDato(informacion) {
    
    let Nombre = informacion.name;
    let Celular = informacion.cellphone;
    let DateBirth = informacion.dateOfBirth;
    let Position = informacion.requiredPosition;
    let Summary = informacion.summary;
    let Langues = informacion.languages;
    let DB = informacion.databases;
    let Framework = informacion.frameworks;
    let Officce = informacion.officeParcel;

    let Businessone = informacion.business;
    let Businessdos = informacion.position;

    let Edu = informacion.school;



    let htmlCon = myCV;


    //remplazar
    htmlCon = htmlCon.replace("{nombre}", Nombre);
    htmlCon = htmlCon.replace("{telefono}", Celular);
    htmlCon = htmlCon.replace("{fecha}", DateBirth);
    htmlCon = htmlCon.replace("{position}", Position);
    htmlCon = htmlCon.replace("{summary}", Summary);
    htmlCon = htmlCon.replace("{lenguages}", Langues);
    htmlCon = htmlCon.replace("{database}", DB);
    htmlCon = htmlCon.replace("{frame}", Framework);
    htmlCon = htmlCon.replace("{office}", Officce);
    htmlCon = htmlCon.replace("{workE}", Businessone);
    htmlCon = htmlCon.replace("{workdos}", Businessdos);
    htmlCon = htmlCon.replace("{education}", Edu);





    document.getElementById('main').innerHTML += htmlCon;

};




