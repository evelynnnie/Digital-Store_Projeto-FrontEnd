const InfoSection = ({ title, informations }) => (
  <div>
    <h4 style={{ fontWeight: 'bold', marginBottom: 12 }}>{title}</h4>
    <ul style={{ padding: 0, margin: 0, listStyle: 'none' }}>
      {informations.map((info, idx) => (
        <li key={idx} style={{ marginBottom: 8 }}>
          {info.link ? (
            <a href={info.link} style={{ color: '#FFFFFF', textDecoration: 'none' }}>{info.text}</a>
          ) : (
            <span>{info.text}</span>
          )}
        </li>
      ))}
    </ul>
  </div>
);

export default InfoSection;