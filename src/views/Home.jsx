import React, { Component } from 'react'
import dotenv from 'dotenv'
import http from '../utils/http'
import SkillBadge from '../components/SkillBadge'
import Loading from '../components/Loading'
import '../styles/Home.css'

dotenv.config()

export default class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      skills: [],
      errorMessage: '',
      loading: true
    }
  }

  componentDidMount () {
    http
      .get(`${process.env.REACT_APP_API}/skills`)
      .then(response => this.setState({ skills: response.data, loading: false }))
      .catch(error => {
        console.log(error)
        this.setState({ errorMessage: 'An error occured. Refresh the page.', loading: false })
      });
  }

  render () {
    const content = this.state.loading
    ?
      <Loading />
    :
      <div className="row">
        <p className="text-left">
          Home
        </p>
        <h2>{this.state.errorMessage}</h2>
        { this.state.skills.map((skill, id) =>
          <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12" key={id}>
            <SkillBadge {...skill} />
          </div>
          // <SkillBadge key={skill.id} name={skill.name} id={skill.id} active={skill.active} />
        ) }
      </div>
    return content
  }
}