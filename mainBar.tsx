import React, { useState } from 'react'
import "./mainBar.css"
import search from '../../assets/icons/search.png';
import add_btn from '../../assets/icons/add_btn.png';
import "../../../src/styles.css"
import fb from '../../assets/icons/facebook.png';
import Input from '../Input/input';


const MainBar = () => {

    const [edit, setEdit] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="mainBarContainer">
                <div className="pageContainer">
                    <div className="mobilePage">
                        <div className="mobilesites"> Sites</div>
                        <div className="mobilesocial">
                            <div className="social_media_for_mobile">Social Media</div>
                            <div className="mobileCount">07</div>
                        </div>
                    </div>
                    <div className="sites"> Sites</div>
                    <div className="searchMargin">

                        <div className="searchBar">
                            <input className='searchField' placeholder='Search' type='text' />
                            <img className="search" src={search} alt="image" />
                        </div>
                        <img className="add_btn" src={add_btn} alt="image" onClick={() => setIsOpen(true)} />
                    </div>
                </div>
                {edit ? (

                    <div className="add_sites">
                        <div className="sitesText">
                            Please Click on the "+" symbol <br></br>to add sites
                        </div>
                    </div>
                ) : (
                    <div className="sitesPage">

                        <div className="social">
                            <div className="social_media">  Social Media</div>
                            <div className="count">07</div>
                            {/* <div className="arrow"><i className="fa-solid fa-angle-down"></i></div> */}
                        </div>

                        <div className='siteCards'>
                            <div className="cards">
                                <div className="cardContent">
                                    <div className="fb_img">
                                        <img className="fb_img" src={fb} alt="iamge" />
                                    </div>
                                    <div className="rightContent">
                                        <div className="facebook">Facebook</div>
                                        <div className="copy">Copy Password</div>
                                    </div>
                                </div>
                                <div className="urlContainer">
                                    <div>www.facebook.com</div>
                                </div>
                            </div>

                            <div className="cards">
                                <div className="cardContent">
                                    <div className="fb_img">
                                        <img className="fb_img" src={fb} alt="iamge" />
                                    </div>
                                    <div className="rightContent">
                                        <div className="facebook">Facebook</div>
                                        <div className="copy">Copy Password</div>
                                    </div>
                                </div>
                                <div className="urlContainer">
                                    <div>www.facebook.com</div>
                                </div>
                            </div>


                            <div className="cards">
                                <div className="cardContent">
                                    <div className="fb_img">
                                        <img className="fb_img" src={fb} alt="iamge" />
                                    </div>
                                    <div className="rightContent">
                                        <div className="facebook">Facebook</div>
                                        <div className="copy">Copy Password</div>
                                    </div>
                                </div>
                                <div className="urlContainer">
                                    <div>www.facebook.com</div>
                                </div>
                            </div>




                            <div className="cards">
                                <div className="cardContent">
                                    <div className="fb_img">
                                        <img className="fb_img" src={fb} alt="iamge" />
                                    </div>
                                    <div className="rightContent">
                                        <div className="facebook">Facebook</div>
                                        <div className="copy">Copy Password</div>
                                    </div>
                                </div>
                                <div className="urlContainer">
                                    <div>www.facebook.com</div>
                                </div>
                            </div>



                            <div className="cards">
                                <div className="cardContent">
                                    <div className="fb_img">
                                        <img className="fb_img" src={fb} alt="iamge" />
                                    </div>
                                    <div className="rightContent">
                                        <div className="facebook">Facebook</div>
                                        <div className="copy">Copy Password</div>
                                    </div>
                                </div>
                                <div className="urlContainer">
                                    <div>www.facebook.com</div>
                                </div>
                            </div>



                            <div className="cards">
                                <div className="cardContent">
                                    <div className="fb_img">
                                        <img className="fb_img" src={fb} alt="iamge" />
                                    </div>
                                    <div className="rightContent">
                                        <div className="facebook">Facebook</div>
                                        <div className="copy">Copy Password</div>
                                    </div>
                                </div>
                                <div className="urlContainer">
                                    <div>www.facebook.com</div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
                }

                {isOpen ? (

                    <div className="modal">
                        <div className="add">
                            Add Site
                        </div>
                        <label className='label'>URL</label><br />
                        <input className='url_field' />

                        <div className="first_div">

                            <div className="fir_one">
                                <label className='label'>Site Name</label><br />
                                <input className='modal_field' />
                            </div>

                            <div className="fir_two">
                                <label className='label'>Sector/Folder</label><br />
                                <input className='modal_field' />
                            </div>
                        </div>

                        <div className="sec_div">

                            <div className="sec_one">
                                <label className='label'>User Name</label><br />
                                <input className='modal_field' />
                            </div>

                            <div className="sec_two">
                                <label className='label'>Site Password</label><br />
                                <input className='modal_field' />
                            </div>

                        </div>

                        <label className='label'>Notes</label><br />
                        <input className='notes' />

                        <div className="btns">
                        <button className="reset_btn">reset</button>
                        <button className="save_btn">save</button>

                        </div>

                    </div>
                ) : ""}

            </div>
        </>
    )
}

export default MainBar