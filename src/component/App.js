import React from 'react';
import unplash from '../Api/unplash';
import SearchBar from './SearchBar';
import ImageList from './imageList';

class App extends React.Component{
   state = {images: []}; 
 onSearchSubmit = async term =>{
 const response= await unplash.get('search/photos',{
      params: {query: term},
  
  });
  this.setState({ images: response.data.results});
  
}

    render(){

        return(
            <div className="ui container" style={{ marginTop: '10px'}}>
            <SearchBar onSubmit= {this.onSearchSubmit} />
             <ImageList images={this.state.images} />
            </div>
          
        );
    
    }
   
}
  

export default App;