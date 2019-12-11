import React from 'react';
import './App.css';

const initialValue = `
### Headers

# Header H1
## Header H2
### Header H3
#### Header H4
##### Header H5
###### Header H6

### List

- 1st Item
- 2nd Item
- 3rd Item

### Links

[FreeCodeCamp](https://www.freecodecamp.org/)

[Google](https://www.google.com "A Search Engine")

### Text Decorations

*Italic*

**Bold**

***Bold and Italic***

### Images

![alt text](https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png)

### Blockquote

> To be, or not to be. That is a stupid question.

### Code

\`npm install create-react-app markdown_previewer\`

\`\`\`
function fibonacci(n) {
  if(n==1){
    return [0,1];
  } else{
    let c = fibonacci(n-1);
    c.push(c[c.length -1] + c[c.length -2]);
    return c;
  }
}
console.log(fibonacci(10));
\`\`\`
`
let marked = require('marked');
let generator = new marked.Renderer();

generator.link = (href, title, text) => {
  return `<a href=${href} target="_blank">${text}</a>`
}

marked.setOptions({
  generator,
  highlight: (code) => {
    return code.value
  },
  breaks: true
})

class App extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      markdown: initialValue
    }
  }
  
  handleDisplay = (event) => {
    this.setState({ 
      markdown: event.target.value 
    });
  }
  
  render() {
    return (
      <div>
        <div className='container'>
            <div className='left'>
              <textarea className="Area" id='editor' value={this.state.markdown} onChange={this.handleDisplay}/>
            </div>
            <div className='right'>
              <output id='preview' dangerouslySetInnerHTML={{__html: marked(this.state.markdown)}} />
            </div>
        </div>
      </div>
    )
  }
}

export default App;
