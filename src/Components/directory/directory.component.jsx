import React from 'react'; 
import {connect} from 'react-redux';
import './directory.styles.scss';
import {createStructuredSelector} from 'reselect';
import {selectDirectorySection} from '../../redux/directory/directory.selectors';
import MenuItem from '../menu-items/menu-item.component';


const  Directory = ({sections}) =>(

        <div className= 'directory-menu'>
            {sections.map( ({title, imageUrl, id , size, linkUrl})=>(
                <MenuItem key ={id} title ={title}  imageUrl ={imageUrl} size={size} linkUrl={linkUrl}/>
            ))}


        </div>
        );
 
const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySection
});
export default connect(mapStateToProps)(Directory) ; 