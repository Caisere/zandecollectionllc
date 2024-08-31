import React from 'react'
import AboutUs from '../pages/AboutUs';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

const Privacy = () => {
  return (
  <div className='text-white mt-8 md:mt-20 flex items-center text-justify justify-center'>
      <div className=' w-[80%] lg:w-[68%]'>
            <div>
              <h1 className='uppercase text-xl md:text-2xl'>Privacy Notice</h1>
            </div>
          
            <div className='flex flex-col justify-center items-start '>
                <div className='text-[14px] text-[#a3a3a3] leading-8 flex flex-col gap-4'>
                    <p> 
                        In the following Privacy Notice, the terms 'we', 'us' and 'our' refer to Zande Collection LLC. By accessing our website, you 
                        confirm that you have understood our Privacy Notice and our Terms and Conditions. If you do not agree with any 
                        part of our Privacy Notice or our Terms and Conditions, you should not use our website nor our services.
                    </p>

                    <span>
                        We aim to deal with the data that we hold fairly and lawfully. This Privacy Notice has information about the data 
                        held by us, how it is used, and what you can do if you want it deleted. It does not apply to other websites which
                            may be linked to on our website, as we have no control over how your data is handled by other sites.
                    </span>

                    <span>
                        Zande Collection LLC is data controller in respect of the personal data processed when you visit this website or communicate 
                        with us by email, telephone, post or other means. If you have any questions or concerns regarding this Privacy 
                        Notice,  <a className='underline italic' href="">please contact us here.</a> 
                    </span>

                    <span>
                        This Privacy Notice was last updated in December 2021 and supersedes any previous version. We reserve the right to
                        modify this Privacy Notice from time to time, so please review this page periodically. Changes and clarifications 
                        will take effect immediately upon being posted here.
                    </span>
                </div>
            </div>

            <div className='flex flex-col justify-center items-start '>
                  <div className='text-[14px] text-[#a3a3a3] leading-8 flex flex-col gap-4'>
                    <div>
                        <h1 className='text-[#FFFFFF]'>Personal data on our systems</h1>
                    </div>
                      <p> If you are in our system, the entry will normally have been created from information provided by you, for 
                        example when sending an application for a property or when phoning or emailing us with an enquiry. We never buy 
                        contact lists, and we never sell any of the information we hold about people to third parties.
                      </p>
                  </div>
            </div>

            <div className='flex flex-col justify-center items-start '>
                <div className='text-[14px] text-[#a3a3a3] leading-8 flex flex-col gap-4'>
                    <div>
                        <h1 className='text-[#FFFFFF]'>Information we may collect and how we use it</h1>
                    </div>
                
                    <p> We collect, use and store different types of personal data depending on who you are.</p>

                    <span>
                        If you are contacting us through this website, by phone or by email, we will collect and use your personal 
                        data (name, phone number, email address) so that we can respond to your enquiry.
                    </span>

                    <span>
                        If you own, rent, or are applying to rent a property managed through Zande Collection LLC or are employing us as search agents to find 
                        you a property to purchase, we collect and use your personal data so that we can provide you with our services and comply 
                        with prevailing laws and regulations (e.g. Right to Rent, anti-money laundering). We do not collect any personal data that 
                        we do not need in order to provide these services to you or comply with law and regulations. The personal data we collect 
                        and use may include:
                    </span>

                    <span>
                        - Identity data (e.g. name, date of birth, gender, marital status) <br />
                        - Contact data (e.g. phone number, email address, address) <br />
                        - Financial data (e.g bank account and payment details) <br />
                        - Transaction data (details about payments from you and to you) <br />
                    </span>

                    <span>
                        This will generally be collected by you filling in forms (which will contain details of how the information 
                        will be used), by your Landlord passing us your contact details for the purpose of processing an application 
                        to rent a property, or by corresponding with us by post, phone, email or otherwise. We may collect personal 
                        information from you which is of a sensitive nature when you voluntarily choose to provide it to us. This is 
                        treated with the additional protection it is given under data protection laws.
                    </span>
                </div>
            </div>

            <div className='flex flex-col justify-center items-start '>
                <div className='text-[14px] text-[#a3a3a3] leading-8 flex flex-col gap-4'>
                    <div>
                        <h1 className='text-[#FFFFFF]'>Where the information is held and disclosed</h1>
                    </div>
                    <p> Information is mostly held on our computers in the UK and in ProtonDrive which is based in ProtonMail's secure 
                        data centres. This website’s development platform may collect any contact information entered into the Contact 
                        Form on this site. Our website is secured with an SSL certificate, which means information entered here is 
                        encrypted. Our Dropbox account will collect any uploads sent via this site. Our call centre provider may collect 
                        contact information when you call us. Depending on who you are, some personal data may have to be shared with 
                        other third parties for the purpose of providing you with our services, including:
                    </p>

                    <span>
                        - Landlords and landlord associates and sub processors<br />
                        - A tenancy deposit administrator (such as DPS) <br />
                        - A referencing company (such as Rentguard Referencing) <br />
                    </span>

                    <span>
                        We require these parties to safeguard the privacy and security of personal information we share with them. 
                        Your data will be mainly held within the UK.  If we use a cloud storage service (or if one of the services or 
                        third party contractors used by us stores data in a cloud server) outside of the UK, this will only be in 
                        circumstances where safeguards have been put in place for its protection, in compliance with the Data 
                        Protection legislation in the UK.
                    </span>
                </div>
            </div>

            <div className='flex flex-col justify-center items-start '>
                <div className='text-[14px] text-[#a3a3a3] leading-8 flex flex-col gap-4'>
                <div>
                    <h1 className='text-[#FFFFFF]'>Visitors to our websites</h1>
                </div>
                    <p>When someone visits this site, we use third-party services, Google Analytics and wix.com, to collect standard 
                        internet log information and details of visitor behaviour (e.g. IP address, device and connection information, 
                        session information such as length of visit to certain pages). We do this to find out things such as the number 
                        of visitors to the various parts of the site. This information is only processed in a way which does not identify 
                        anyone and we do not normally make any attempt to find out the identities of those visiting our website. 
                    </p>
                </div>
            </div>

            <div className='flex flex-col justify-center items-start '>
                <div className='text-[14px] text-[#a3a3a3] leading-8 flex flex-col gap-4'>
                <div>
                    <h1 className='text-[#FFFFFF]'>Social media</h1>
                </div>
                    <p>We use various social media organisations such as Facebook, Twitter and Google Plus in compliance with the 
                        relevant organisation’s own terms and conditions.  
                    </p>
                </div>
            </div>


            <div className='flex flex-col justify-center items-start '>
                <div className='text-[14px] text-[#a3a3a3] leading-8 flex flex-col gap-4'>
                <div>
                    <h1 className='text-[#FFFFFF]'>Cookies</h1>
                </div>
                    <p>As with most websites, ours uses cookies. A cookie is a very small text file that a website can send to your browser 
                        and is stored on your device for various periods of time. When you return to that website, your browser retrieves 
                        and sends cookies to the server. In simple terms, cookies tell a website when a user has returned. <br /> 
                        On our site, cookies are used by software programs such as Google Analytics and our web platform wix.com, which 
                        measure visitors to the site and allow us to see information such as how people are using the site and which pages
                        are popular. We do not use any advertising cookies. <br />
                        If you are happy to proceed, just continue using the site. If you’d like to remove cookies, learn more about them, 
                        or manage them, please visit AboutCookies.org for further information. Note that removing them may affect some of 
                        the functionality of our site when accessed from your device.
                    </p>
                </div>
            </div>

            <div className='flex flex-col justify-center items-start '>
                <div className='text-[14px] text-[#a3a3a3] leading-8 flex flex-col gap-4'>
                <div>
                    <h1 className='text-[#FFFFFF]'>How we communicate with you</h1>
                </div>
                    <p>We may contact you to by email, phone, text message, and post in order to notify you regarding your property or 
                        the property you wish to rent or purchase, to collect fees or monies owed, to answer your enquiries, to resolve a 
                        dispute, to send updates about our company, or as otherwise necessary to contact you to allow us to enforce our 
                        Agency Agreement or Tenancy Agreement. 
                    </p>
                </div>
            </div>


            <div className='flex flex-col justify-center items-start '>
                <div className='text-[14px] text-[#a3a3a3] leading-8 flex flex-col gap-4'>
                <div>
                    <h1 className='text-[#FFFFFF]'>Your rights</h1>
                </div>
                    <p>You have the right to protect your personal data, and as such, you can ask us for the personal data that we hold 
                        and process about you, specifically: the purpose for which we are processing your information, the categories of 
                        personal information held, the recipients to whom the personal data has been or will be disclosed, and the period 
                        for which we will store your information and why.
                    </p>
                    <p>You have the right to ask that any inaccurate information we hold about you is corrected.</p>
                    <p>We will keep information for a reasonable amount of time in order to perform the purposes listed above. You can ask 
                        that we stop using your personal data for certain purposes or that we delete the personal data we hold about you in 
                        certain situations, by contacting us <a className='underline italic' href="">here.</a> We will in most cases do this to the best of our ability, but note that 
                        if you are or were a client or tenant, we will need to retain your details for legal reasons (e.g. in case we 
                        receive an enquiry from HMRC) for 6 years from the date we stopped providing our services to you. 
                    </p>
                    <span>
                        You will not usually have to pay a fee to exercise these rights, but if your request is repetitive or excessive, a fee 
                        may be charged or the request refused. 
                    </span>
                    <span>
                        If you have any questions, complaints, comments or requests regarding how we deal with data in our systems or 
                        anything else on this page <a className='underline italic' href="">please contact us here.</a> 
                    </span>
                    <span>
                        If you are not satisfied with our response, or consider that we have not dealt with your data correctly, you have 
                        the right to complain to the Information Commissioners Office at www.ico.org.
                    </span>
                </div>
            </div>


            <div className='flex flex-col justify-center items-start mb-28 '>
                <div className='text-[14px] text-[#a3a3a3] leading-8 flex flex-col gap-4'>
                <div>
                    <h1 className='text-[#FFFFFF]'>Further information</h1>
                </div>
                    <p>This Privacy Notice was drafted with brevity and clarity in mind. It does not provide exhaustive detail of all 
                        aspects of our collection and use of personal information. If you would like any additional information or 
                        explanation, please do <a className='underline italic' href="">contact us</a>  and we will be happy to provide this.
                    </p>
                    <span className='underline italic'><a href="">Click here to see our Terms and Conditions</a> </span>
                </div>
            </div>
      </div>
    </div>
  )
}

export default Privacy