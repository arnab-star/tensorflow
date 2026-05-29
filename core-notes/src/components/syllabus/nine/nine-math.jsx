export default function NineMath() {
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
            background: linear-gradient(135deg, #11998e, #38ef7d);
            font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          }

         .math-container{
            max-width:1200px;
            margin:40px auto;
            padding:30px;
            background: #dffaf1;
            border:1px solid rgba(255,255,255,0.2);
            border-radius:24px;
            box-shadow:0 10px 30px rgba(0,0,0,0.18);
            }

          .math-title{
            text-align:center;
            font-size:42px;
            font-weight:700;
            color:#1d3557;
            margin-bottom:35px;
            letter-spacing:1px;
          }

          .math-buttons{
            display:grid;
            grid-template-columns:repeat(auto-fit, minmax(320px, 1fr));
            gap:18px;
          }

          .math-buttons button{
            background:linear-gradient(135deg, #2563eb, #1e40af);
            color:white;
            border:none;
            padding:18px 20px;
            border-radius:16px;
            font-size:17px;
            font-weight:600;
            text-align:left;
            line-height:1.5;
            cursor:pointer;
            transition:all 0.3s ease;
            box-shadow:0 6px 15px rgba(37,99,235,0.2);
          }

          .math-buttons button:hover{
            transform:translateY(-4px);
            background:linear-gradient(135deg, #1e40af, #1d4ed8);
            box-shadow:0 10px 20px rgba(37,99,235,0.35);
          }

          .math-buttons button:active{
            transform:scale(0.98);
          }

          @media(max-width:768px){

            .math-container{
              margin:20px;
              padding:20px;
            }

            .math-title{
              font-size:32px;
            }

            .math-buttons{
              grid-template-columns:1fr;
            }

            .math-buttons button{
              font-size:15px;
              padding:16px;
            }
          }
        `}
            </style>

            <div className="math-container">
                <h1 className="math-title">Math Syllabus</h1>

                <div className="math-buttons">

                    <button>
                        CH -1. বাস্তব সংখ্যা (Real Numbers)
                    </button>

                    <button>
                        CH -2. সূচকের নিয়মাবলি (Laws of Indices)
                    </button>

                    <button>
                        CH -3. লেখচিত্র (Graph)
                    </button>

                    <button>
                        CH -4. স্থানাঙ্ক জ্যামিতি: দূরত্ব নির্ণয়
                        (Co-ordinate Geometry: Distance Formula)
                    </button>

                    <button>
                        CH -5. রৈখিক সহ সমীকরণ (দুই চল বিশিষ্ট)
                        (Linear Simultaneous Equations)
                    </button>

                    <button>
                        CH -6. সামান্তরিকের ধর্ম
                        (Properties of Parallelogram)
                    </button>

                    <button>
                        CH -7. বহুপদী সংখ্যামালা (Polynomial)
                    </button>

                    <button>
                        CH -8. উৎপাদকে বিশ্লেষণ (Factorisation)
                    </button>

                    <button>
                        CH -9. রৈখিক সহ সমীকরণ (দুই চল বিশিষ্ট)
                        (Linear Simultaneous Equations)
                    </button>

                    <button>
                        CH -10. ভেদক ও মধ্যবিন্দু সংক্রান্ত উপপাদ্য
                        (Transversal & Mid-Point Theorems)
                    </button>

                    <button>
                        CH -11. লাভ ও ক্ষতি (Profit and Loss)
                    </button>

                    <button>
                        CH -12. রাশিবিজ্ঞান (Statistics)
                    </button>

                    <button>
                        CH -13. ক্ষেত্রফল সংক্রান্ত উপপাদ্য
                        (Theorems on Area)
                    </button>

                    <button>
                        CH -14. সম্পাদ্য: ত্রিভুজের সমান ক্ষেত্রফল বিশিষ্ট
                        সামান্তরিক অঙ্কন যার একটি কোণের পরিমাপ নির্দিষ্ট
                    </button>

                    <button>
                        CH -15. সম্পাদ্য: চতুর্ভুজের সমান ক্ষেত্রফল
                        বিশিষ্ট ত্রিভুজ অঙ্কন
                    </button>

                    <button>
                        CH -16. ত্রিভুজ ও চতুর্ভুজের পরিসীমা ও ক্ষেত্রফল
                        (Area & Perimeter of Triangle & Quadrilateral)
                    </button>

                    <button>
                        CH -17. বৃত্তের পরিধি (Circumference of Circle)
                    </button>

                    <button>
                        CH -18. সমবিন্দু সংক্রান্ত উপপাদ্য
                        (Theorems on concurrence)
                    </button>

                    <button>
                        CH -19. বৃত্তের ক্ষেত্রফল (Area of Circle)
                    </button>

                    <button>
                        CH -20. স্থানাঙ্ক জ্যামিতি: সরলরেখাংশের
                        অন্তর্বিভক্ত ও বহিঃর্বিভক্ত
                        (Internal & External Division)
                    </button>

                    <button>
                        CH -21. স্থানাঙ্ক জ্যামিতি: ত্রিভুজাকৃতি ক্ষেত্রের ক্ষেত্রফল
                    </button>

                    <button>
                        CH -22. লগারিদম (Logarithm)
                    </button>

                </div>
            </div>
        </>
    );
}