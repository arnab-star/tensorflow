export default function SubjectEleven() {
    return (
        <>
            <style>
                {`
          *{
            margin:0;
            padding:0;
            box-sizing:border-box;
          }

          body{
            font-family:'Poppins',sans-serif;
            background:#020617;
          }

          .main-container{
            min-height:100vh;
            display:flex;
            justify-content:center;
            align-items:center;
            padding:20px;
            background:
              radial-gradient(circle at top right,#2563eb55,transparent 30%),
              radial-gradient(circle at bottom left,#7c3aed55,transparent 30%),
              linear-gradient(135deg,#020617,#0f172a,#111827);
          }

          .main-card{
            width:100%;
            max-width:500px;
            background:rgba(15,23,42,0.95);
            border:1px solid rgba(255,255,255,0.08);
            border-radius:35px;
            padding:40px 28px;
            backdrop-filter:blur(15px);
            box-shadow:
              0 20px 50px rgba(0,0,0,0.45),
              inset 0 1px 1px rgba(255,255,255,0.05);
            color:white;
            margin-bottom:10px;
          }

          .title{
            text-align:center;
            font-size:38px;
            font-weight:700;
            margin-bottom:15px;
          }
          .class-btn{
            width:100%;
            height:50px;
            border:none;
            border-radius:18px;
            color:white;
            font-size:20px;
            cursor:pointer;
            transition:0.3s ease;
            margin-bottom:15px;
          }
          .bengali{
            background:linear-gradient(135deg,#2563eb,#3b82f6);
          }

          .english{
            background:linear-gradient(135deg,#0891b2,#06b6d4);
          }

          .mathematics{
            background:linear-gradient(135deg,#7c3aed,#8b5cf6);
          }

          .physics{
            background:linear-gradient(135deg,#db2777,#ec4899);
          }
          .chemistry{
             background:linear-gradient(135deg,#7c3aed,#4f46e5);
          }
            .biology{   
                background:linear-gradient(135deg,#0891b2,#06b6d4); 
            }
          @media(max-width:480px){
            .main-card{
              padding:35px 22px;
              border-radius:28px;
            }

                .title{
                    font-size:32px;
                }
            }
            `}
            </style>
            <div className="main-container">
                <div className="main-card">
                    <h1 className="title">All Subjects of Class 11</h1>
                    <button className="class-btn mathematics">Mathematics</button>
                    <button className="class-btn physics">Physics</button>
                    <button className="class-btn chemistry">Chemistry</button>
                    <button className="class-btn biology">Biology</button>
                </div>
            </div>
        </>
    );
}