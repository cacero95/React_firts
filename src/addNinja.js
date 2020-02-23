import React, {Component} from 'react';

class AddNinja extends Component {
    state = {
        name:'',
        age:null,
        belt:''
    };
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit=(e)=>{
        // el e.preventDefualt previene que se actualize la pagina
        e.preventDefault();
        this.props.addNinja(this.state);
    }
    delete_file=()=>{
        this.props.delete(document.querySelector('#eliminar').value);
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" onChange={this.handleChange}/>
                    <label htmlFor="age">Age:</label>
                    <input type="number" id="age" onChange={this.handleChange}/>
                    <label htmlFor="belt">Belt:</label>
                    <input type="text" id="belt" onChange={this.handleChange}/>
                    <button>submit</button>
                </form>
                <label htmlFor="name">Nombre persona</label>
                <input type="text" id="eliminar"></input>
                <button onClick={this.delete_file}>eliminar</button>
            </div>
        )
    }
}
export default AddNinja;