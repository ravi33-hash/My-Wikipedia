//
let searchElement= document.getElementById("searchbar");
let dynamic_result= document.getElementById("dynamic_results");

function elebrate_results(result)
{
    let {title,link,description}= result;

    // create a container for result
    let container= document.createElement('div');
    container.classList.add("main_box");
    dynamic_result.appendChild(container);

    // create a Title 
    let result_title= document.createElement('a');
    result_title.classList.add('result_title');
    result_title.textContent= title;
    result_title.href= link;
    result_title.target= "_blank";
    container.appendChild(result_title);

    // break
    let br= document.createElement('br');
    container.appendChild(br);

    // create a url
    let result_url= document.createElement('a');
    result_url.classList.add('result_url');
    result_url.textContent= link;
    result_url.href= link;
    result_url.target= '_blank';
    container.appendChild(result_url);

    // break
    let br1= document.createElement('br');
    container.appendChild(br1);

    // create a description.
    let para= document.createElement('p');
    para.textContent= description;
    para.classList.add('para');
    container.appendChild(para);
}

function display_results(search)
{
    for(let result of search)
    {
        // noe result has 3 items (title,link,description).
        elebrate_results(result);
    }
}

function searchFun(event)
{
    if(event.key === 'Enter')
    {
        dynamic_result.textContent= " ";
        let searchValue= searchElement.value;
        console.log(searchValue);
        let url= "https://apis.ccbp.in/wiki-search?search="+searchValue;
        let options=
        {
            method: "GET",

        }
        fetch(url,options)
        .then(function(response)
        {
            return response.json();
        })
        .then(function(myData)
        {
            let {search_results}= myData;
            display_results(search_results);
        })
    }
}
searchElement.addEventListener('keydown',searchFun);