import Name from "./name";
import Details from "./deatails";

export default function DetailsClass() {
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
            max-width:450px;
            background:rgba(15,23,42,0.95);
            border:1px solid rgba(255,255,255,0.08);
            border-radius:35px;
            padding:40px 28px;
            backdrop-filter:blur(15px);
            box-shadow:
              0 20px 50px rgba(0,0,0,0.45),
              inset 0 1px 1px rgba(255,255,255,0.05);
            color:white;
          }

          .title{
            text-align:center;
            font-size:38px;
            font-weight:700;
            margin-bottom:10px;
          }

          .subtitle{
            text-align:center;
            color:#94a3b8;
            font-size:14px;
            line-height:1.7;
            margin-bottom:35px;
          }

          .label{
            display:block;
            margin-bottom:12px;
            color:#e2e8f0;
            font-size:20px;
            font-weight:500;
          }

          .input-box{
            width:100%;
            height:58px;
            border:none;
            outline:none;
            border-radius:18px;
            background:rgba(255,255,255,0.06);
            border:1px solid rgba(255,255,255,0.08);
            padding:0 18px;
            color:white;
            font-size:15px;
            margin-bottom:28px;
            transition:0.3s ease;
          }

          .input-box::placeholder{
            color:#64748b;
          }

          .input-box:focus{
            border-color:#3b82f6;
            box-shadow:0 0 18px rgba(59,130,246,0.25);
          }

          .class-buttons{
            display:flex;
            flex-direction:column;
            gap:16px;
          }

          .class-btn{
            width:100%;
            height:62px;
            border:none;
            border-radius:18px;
            color:white;
            font-size:17px;
            font-weight:600;
            cursor:pointer;
            transition:0.3s ease;
          }

          .class-btn:hover{
            transform:translateY(-2px);
          }

          .class-9{
            background:linear-gradient(135deg,#2563eb,#3b82f6);
          }

          .class-10{
            background:linear-gradient(135deg,#0891b2,#06b6d4);
          }

          .class-11{
            background:linear-gradient(135deg,#7c3aed,#8b5cf6);
          }

          .class-12{
            background:linear-gradient(135deg,#db2777,#ec4899);
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

          <h1 className="title">
            Student Details
          </h1>

          <p className="subtitle">
            Enter your information and select your class.
          </p>

          <Name />

          <Details />

        </div>
      </div>
    </>
  );
}