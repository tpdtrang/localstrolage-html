import React, { Component } from 'react';

class FormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: '',
      title: '',
      description: '',
      date: '',
      edit: false
    }
  }
  onHandleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  onSubmit = (event) => {
    event.preventDefault();
    if (this.state.edit) {
      this.props.onUpdate(this.state);
    } else {
      this.props.onAdd(this.state);
    }
  }
  componentDidMount() {
    if (this.props.params.new) {
      let data = JSON.parse(localStorage.getItem('data'));
      let dataEdit = data.filter(item => item.id === Number(this.props.params.new));
      // console.log(data, this.props.params.new, dataEdit);
      this.setState({
        id: dataEdit[0].id,
        title: dataEdit[0].title,
        description: dataEdit[0].description,
        date: dataEdit[0].date,
        image: dataEdit[0].image,
        edit: true
      })
    }
  }
  render() {
    return (
      <section className="form-container">
        <div className="container">
          <div className="p-form">
            <div className="p-title"><h2 className="heading-2">Form</h2></div>
            <form className="p-content text-left" onSubmit={this.onSubmit}>
              <label>Images: </label>
              <input type="text" name="image" onChange={this.onHandleChange} value={this.state.image} />
              <label>Title: </label>
              <input type="text" name="title" onChange={this.onHandleChange} value={this.state.title} />
              <label>Description: </label>
              <input type="text" name="description" onChange={this.onHandleChange} value={this.state.description} />
              <label>Date: </label>
              <input type="date" name="date" onChange={this.onHandleChange} value={this.state.date} />
              <button type="submit" className="btn waves-effect">SAVE</button>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default FormComponent;