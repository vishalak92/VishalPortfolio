import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if(this.props.data){

      var education = this.props.data.education.map(function(education){

        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p>{education.description}</p>
        {
          education.descriptionpointers.map(function(pointers) {
                return (
                   <ul><li style = {{listStyleType : "circle"}}>{pointers.pointer}</li></ul>
                )
              })
        }
        </div>
      })
      var work = this.props.data.work.map(function(work){
        return <div key={work.company}><h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            {
              work.description.map(function(pointers) {
                    return (
                       <ul><li style = {{listStyleType : "circle"}}>{pointers.pointer}</li></ul>
                    )
                  })
            }
        </div>
      })
      var skills = this.props.data.skills.map(function(skills){
        var className = 'bar-expand '+skills.skillcategory.toLowerCase();
        return <div key={skills.skillcategory}><p><h3>{skills.skillcategory}</h3></p>
        <br/>

        {
            skills.skilllist.map(function(skill){

            return(
            <ul><li key={skill.name} title={skill.level}><span style={{width:skill.level}}className={className}></span><em>{skill.name}</em></li></ul>)
          })
        }
        </div>
      })
    }

    return (
      <section id="resume">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>


      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Work</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
    </div>



      <div className="row skill">

         <div className="three columns header-col">
            <h1><span>Skills</span></h1>
         </div>

         <div className="nine columns main-col">

				<div className="bars">

					  {skills}

				</div>
			</div>
      </div>
   </section>
    );
  }
}

export default Resume;
