"use client"

export default function Position() {
  return (
    <div 
      className="container"
      style={{
        position: 'relative',
        height: '200px',
      }}
    >
      container
      <div
        className="box"
        style={{
          position: 'absolute',
          top: '50px',
          left: '20px',          
        }}
      >
        Box
          <div
          className="box"
          style={{
            position: 'relative',
            top: '50px',
            left: '20px',          
          }}
        >
          Box2
        </div>
      </div>
    </div>
  )
}
