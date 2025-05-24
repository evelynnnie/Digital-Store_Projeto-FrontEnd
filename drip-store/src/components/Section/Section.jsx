const COLORS = {
  primary: '#C92071',
  darkGray2: '#474747',
};

const Section = ({ title, titleAlign = "left", link, children }) => (
  <section style={{ margin: '40px 0' }}>
    {(title || link) && (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: titleAlign === "center" ? "center" : "flex-start",
        marginBottom: 24,
        position: 'relative',
      }}>
        {title && (
          <h2 style={{
            color: COLORS.darkGray2,
            fontSize: 24,
            flex: 1,
            textAlign: titleAlign,
            margin: 0,
          }}>
            {title}
          </h2>
        )}
        {link && (
          <a
            href={link.href}
            style={{
              color: COLORS.primary,
              fontSize: 18,
              fontWeight: 500,
              marginLeft: 'auto',
              textDecoration: 'none',
            }}
          >
            {link.text}
          </a>
        )}
      </div>
    )}
    <div>
      {children}
    </div>
  </section>
);

export default Section;