import React, {Component} from 'react'
import '../css/BlueBadge.css'
import janet from '../img/janet.png'
import microsoft from '../img/microsoft.png'

import {
  Persona,
  PersonaSize,
  PersonaPresence
} from 'office-ui-fabric-react/lib/Persona'

const examplePersona = {
  imageUrl: janet,
  imageInitials: 'JI',
  primaryText: 'Janet Ingram',
  secondaryText: 'Software Engineer',
  tertiaryText: 'In a meeting',
  optionalText: 'Available at 4:00pm'
};

export default class extends Component {
  render() {
    console.log(microsoft);
    return <div className="badge">
      <div className="badgeTop">
      <div className="badgePicture">
      <Persona
          { ...examplePersona }
          size={ PersonaSize.size100 }
          hidePersonaDetails="true"
        />
      </div>
      </div>
      <div className="badgeBottom">
        <div className="badgeName">
          Janet
        </div>
        <div className="badgeLogo">
          <img src={microsoft} width="100px" />
        </div>
      </div>
    </div>
  }
}
