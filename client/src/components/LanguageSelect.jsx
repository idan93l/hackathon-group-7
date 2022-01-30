import React from react

export default function LanguageSelect({languagesArray, handleSelect}) {
    const renderLangues = (languagesArray) => {
       return  languagesArray.map((language)=> {return <option key={language} value={language}>{language}</option> } )   
    }
    return (
        <select name="Language" id="Language" onChange={handleSelect}>
           {renderLangues(languagesArray)}
        </select>
    )
}
