import PropTypes from 'prop-types'
import Card from "./Card"

const ContentList = ({ notes, showFormattedDate, handleArchive, handleDelete }) => {
  return (
    <div className="flex flex-wrap justify-between">
      {notes.map((note, index) => (
        <Card
          key={index}
          note={note}
          showFormattedDate={showFormattedDate}
          handleArchive={handleArchive}
          handleDelete={handleDelete}
        />
      ))}
    </div >
  )
}

ContentList.propTypes = {
  notes: PropTypes.array.isRequired,
  showFormattedDate: PropTypes.func.isRequired,
  handleArchive: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
}

export default ContentList