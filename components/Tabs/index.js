// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(response => {
       response.data.topics.forEach(el =>{
        const newTab = createTab(el)
        topics.append(newTab);
    })     
    })
    .catch(error =>{
        console.log('The data was not returned', error)
    })

    
const topics = document.querySelector('.topics');
console.log(topics);
    


function createTab(topic){

    //create element
    const tab = document.createElement('div');

    //add class
    tab.classList.add('tab');

    //set content

    tab.textContent = topic;

    return tab;
}