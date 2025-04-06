
function SkillList({src,skill}) {
  return (
    <div>
      <span>
            <img src={src} alt={`${skill} icon`}/>
            <p>{skill}</p>
        </span>
    </div>
  )
}

export default SkillList
