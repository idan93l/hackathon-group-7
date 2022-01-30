import react from react

export default function LanguageSelect({languagesArray}) {
    const renderLangues = (languagesArray) => {
       return  languagesArray.map((language)=> {return <option key={language} value={language}>{language}</option>  )   
    }
    return (
        <select name="Language" id="Language">
           {renderLangues()}
        </select>
    )
}
