import './style.css';
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { green, yellow } from '@mui/material/colors';
import { styled } from '@mui/material';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}
 
function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (

        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export default function VerticalTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div className="main">
            <h2 className='title'>
            CV For Developer Job</h2>
        <div className="container">
            <Box
                sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex' }}
            >
                <Tabs
                    className='left'
                    orientation="vertical"
                    variant="scrollable"
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs example"
                    sx={{ borderRight: 1, borderColor: 'divider', }}
                >
                    <Tab style={{ color: "#4fc3f7", fontWeight: "bolder" }} label="personal information" {...a11yProps(0)} />
                    <Tab style={{ color: "#4fc3f7", fontWeight: "bolder" }} label="WORK EXPERIENCE" {...a11yProps(1)} ></Tab>/
                    <Tab style={{ color: "#4fc3f7", fontWeight: "bolder" }} label="SKILLS" {...a11yProps(2)} />
                    <Tab style={{ color: "#4fc3f7", fontWeight: "bolder" }} label="PROJECTS" {...a11yProps(3)} />
                    <Tab style={{ color: "#4fc3f7", fontWeight: "bolder" }} label="Career Objective" {...a11yProps(4)} />
                    <Tab style={{ color: "#4fc3f7", fontWeight: "bolder" }} label="places interviewed" {...a11yProps(5)} />
                    <Tab style={{ color: "#4fc3f7", fontWeight: "bolder" }} label="degree and transcript
" {...a11yProps(6)} />
                </Tabs>
                <TabPanel value={value} index={0} className="right">
                    <div className="rightcontainer">
                         < img src="https://i.pinimg.com/474x/b7/2a/db/b72adbce53118645c4ebad6929fae574.jpg" alt="" className="avt"
                        height="200px" width="200px" border="2px" 
                        />
                        <div className="infor">
                            <h1 style={{ color: "#616161" }}>NGUYEN DINH LOC</h1>
                            <table className="table">
                                <div className="mainif">
                                    <td >
                                        <tr >Date of birth:</tr>
                                        <tr >Gender:</tr>
                                        <tr >Phone:</tr>
                                        <tr >Email:</tr>
                                        <tr >Address:</tr>
                                        <tr >GPA:</tr>
                                    </td>
                                </div>
                                <div className="if">
                                    <td >
                                        <tr>October 25, 2001
                                        </tr>
                                        <tr>Male
                                        </tr>
                                        <tr>0833636536</tr>
                                        <tr>Dinhloc2510@gmail.com</tr>
                                        <tr>Da Nang, Vietnam
                                        </tr>
                                        <tr>3.21/4 (Good)</tr>
                                    </td>
                                </div>
                            </table>
                        </div>
                    </div>
                    <h3 className="edu" style={{ color: "#616161", borderBottom: "solid 2px #4fc3f7" }}>EDUCATION</h3>
                    <div className="eduif">
                        <div>
                            <span>2020- July 2023:
                            </span>
                        </div>
                        <div className="edudt">
                            <span> Duy Tân University</span>
                            <br />
                            <span>Major: Information Technology</span>
                        </div>
                        
                    </div>
                    <h3 className="edu" style={{ color: "#616161", borderBottom: "solid 2px #4fc3f7" }}>EDUCATION</h3>
                    <table className='produc' style={{ color: "#616161" }}>
                        <tr  >
                            <td ><h4>Advantages </h4>
                            </td>
                            <td className="prodt">Self-learning skill (good)
                                <br />
                                Sritical thinking and strict logic (good)
                                <br />Have good communication skills and quick response in situations
                            </td>
                        </tr><tr >
                            <td><h4>Disadvantages </h4>
                            </td>
                            <td className="prodt">Time management (not good) <br />
                            I have a poor memory, so I often write it down in notes
                            </td>
                        </tr>
                    </table>
               
                </TabPanel>
                <TabPanel value={value} index={1} className="right">
                    <h2 style={{ color: "#616161", borderBottom: "solid 2px #4fc3f7" }}>WORK EXPERIENCE</h2>
                    <table >
                        <td>
                            <td>(1 months) 2023 :
                            </td>
                            <td className="workdt">Internship of VNPT (Sales Specialist)</td>
                        </td>
                    </table>
                </TabPanel>
                <TabPanel value={value} index={2} className="right">
                    <h2 style={{ color: "#616161", borderBottom: "solid 2px #4fc3f7" }}>SKILLS</h2>
                    <table className="skilltb" style={{ color: "#616161", borderBottom: "solid 2px #4fc3f7" }}>
                        <tr >
                            <td><h3>Language</h3>
                            </td>
                            <td className="skilldt">ReactJS, HTML/CSS
                                <br />ASP.net, Python, C, C#
                                <br />Java, Android
                            </td>
                        </tr><tr>
                            <td><h3>Database </h3>
                            </td>
                            <td className="skilldt">SQL Server, MySQL
                            </td>
                        </tr><tr>
                            <td><h3>Programming Tools  </h3>
                            </td>
                            <td className="skilldt">Microsoft Visual Studio, Visual Studio Code <br />
                                Microsoft SQL Server, MySQL Workbench, Git, notepad
                            </td>
                        </tr>
                    </table>
                </TabPanel>
                <TabPanel value={value} index={3} className="right">
                    <h2 style={{ color: "#616161", borderBottom: "solid 2px #4fc3f7" }}>PROJECTS</h2>
                    <h4>1. Laptop Center (2023)
                    </h4>
                    <table className='produc' style={{ color: "#616161", border: "solid 2px #4fc3f7", borderCollapse: "collapse" }}>
                        <tr  >
                            <td ><h4>Description</h4>
                            </td>
                            <td className="prodt">Building software to sell laptops online.
                                Software included some functions:
                                <br />add, edit, delete products
                                add to cart, payment and purchase, order history,...
                                <br />
                                <a href="https://github.com/LocNguyen2510/">https://github.com/LocNguyen2510/</a>
                            </td>
                        </tr><tr >
                            <td><h4>Team size </h4>
                            </td>
                            <td className="prodt">1
                            </td>
                        </tr><tr>
                            <td><h4>My Position  </h4>
                            </td>
                            <td className="prodt">Developer
                            </td>
                        </tr><tr>
                            <td><h4>Technologies used
                            </h4></td>
                            <td className="prodt">ReactJS , Scss, Html/Css
                            </td>
                        </tr>
                    </table>
                    <h4>2. Graduate Dissertation (2023)
                    </h4>
                    <table className='produc' style={{ color: "#616161", border: "solid 2px #4fc3f7", borderCollapse: "collapse" }}>
                        <tr  >
                            <td ><h4>Description</h4>
                            </td>
                            <td className="prodt">Generate ideas and plan stages, document and design websites,test software
                                <br />and write reports
                            </td>
                        </tr><tr >
                            <td><h4>Team size </h4>
                            </td>
                            <td className="prodt">4
                            </td>
                        </tr><tr>
                            <td><h4>My Position  </h4>
                            </td>
                            <td className="prodt">IT Business Analyst

                            </td>
                        </tr><tr>
                            <td><h4>Technologies used
                            </h4>
                            </td>
                            <td className="prodt">Word, Excel , Powerpoint,...
                            </td>
                        </tr>
                    </table>
                </TabPanel>
                <TabPanel value={value} index={4} className="right">
                    <h2 style={{ color: "#616161", borderBottom: "solid 2px #4fc3f7", }}>Career Objective</h2>
                    <div style={{ width: 800 }}>
                        <h3 className='avt' style={{ borderBottom: "solid 2px #616161" }}>English</h3>
                        <span>Currently, I'm learning English and basic coding on CS50x to consolidate my knowledge and am aiming for full stack. If hired, I will definitely not let studying affect training. My current knowledge may not be good, but I will definitely complete the company's training process with time and effort and be willing to compensate for damages if I do not complete the training course.</span>
                    <br /><br />
                    <span>This is a website built in 2 days for the purpose of describing information, so it may not be beautiful or complete
                    </span>
                    </div>
                    <div className='avt' style={{ width: 800 }}>
                        <h3 style={{ borderBottom: "solid 2px #616161" }}>Vietnamese</h3>
                        <span >Hiện tại mình đang học tiếng anh và học code cơ bản trên cs50x để củng cố lại kiến thức và đang hướng đến fullstack. Nếu được tuyển mình chắc chắn sẽ không để việc học ảnh hưởng đến việc đào tạo. Hiện tại có thể kiến thức không tốt nhưng chắc chắn sẽ hoàn thành quá trình đào tạo của công ty bằng thời gian và nỗ lực cũng như sẵn sàng đền bù thiệt hại nếu không hoàn thành khóa đào tạo.</span>
                   <br /> <br />
                   <span>Đây là website được xây dựng trong 2 ngày với mục đích mô tả thông tin nên có thể không đẹp và hoàn chỉnh</span>
                    </div>
                </TabPanel>
                <TabPanel value={value} index={5} className="right">
                <h2 style={{ color: "#616161", borderBottom: "solid 2px #4fc3f7", }}>Places Interviewed</h2>

                    <table className="placetb" style={{ color: "#616161", border: "solid 2px #4fc3f7", borderCollapse: "collapse" }}>
                        <tr>
                            <th>Position</th>
                            <th>Company</th>
                            <th>Date</th>
                        </tr>
                        <tr>
                            <td>Fresher Dev</td>
                            <td>VNPT quang tri</td>
                            <td>April 26, 2024</td>
                        </tr>
                        <tr>
                            <td>Javascript Dev</td>
                            <td>Clearpath</td>
                            <td>June 5, 2024</td>
                        </tr>
                        <tr>
                            <td>Fresher Dev</td>
                            <td>The New Moon</td>
                            <td>December 11, 2023</td>
                        </tr>
                        <tr>
                            <td>Fresher Dev</td>
                            <td>ZIGExN Ventura</td>
                            <td>November 29, 2023</td>
                        </tr>
                        <tr>
                            <td>Fresher Dev</td>
                            <td>Glory</td>
                            <td>July 31, 2023</td>
                        </tr>
                        <tr>
                            <td>Fresher Tester</td>
                            <td>Avepoint</td>
                            <td>June, 2023</td>
                        </tr>
                    </table>
                </TabPanel>
                <TabPanel value={value} index={6} className="right">
                < img    src="https://i.pinimg.com/736x/27/a2/a0/27a2a0fcb6cb76fa3a6ac974a42a4b38.jpg" 
                height="300px" width="500px" 
                />< img    src="https://i.pinimg.com/736x/10/97/09/109709e14f6d00df22854e27b448ff40.jpg" 
                height="300px" width="500px" 
                />
                <br />< img    src="https://i.pinimg.com/736x/8e/c5/c3/8ec5c34d6e6c62728b13846127afea88.jpg" 
                height="500px" width="500px" 
                />< img    src="https://i.pinimg.com/736x/2d/84/a0/2d84a0e73148e2474450752cd6aa1820.jpg" 
                height="500px" width="500px" 
                />
                                       

                </TabPanel>
            </Box>
            
        </div>
        </div>
        )
        }
        
        
// export default Home;
