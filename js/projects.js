var projects = [
	{
		'highlight': 'yes',
		'id': 'remoteWorkshop',
		'title': 'Hands-On Remote Workshop',
		'type': 'Remote ILT',
		'shortDescription': 'Conversion of an in-person, hands-on software workshop to remote ILT while maintaining value of practical exercises.',
		'tools': 'Microsoft Teams, Microsoft Azure Labs, Netop Remote Management',
		'skills': 'Training Facilitation, Cloud Hosting, Cross-Functional Project Management',
		'client': 'Toshiba Global Commerce Solutions',
		'heroShot': 'projects/remoteWorkshop/hero.jpg',
		'detailShot': "projects/remoteWorkshop/detail.png",
		'heroSource': {
			'original': 'img/stock/laptop-with-blank-white-screen.jpg',
			'link': 'https://www.freepik.com/wayhomestudio',
			'photographer': "wayhomestudio",
			'title': "Laptop with blank white screen"
		},
		'problem': 	"<p>Customers valued in-person workshops for the hands-on, practical exercises.</p><p>These exercises required specialized hardware and software configurations.</p><p>The hardware requirements, along with associated shipping and travel costs, made the workshops cost-prohibitive for smaller customers and led to long lead times in scheduling.</p>",
		'solution': "<p>Virtualize the required hardware and host it in the cloud.</p><p>Lecture sections of the workshop are delivered via video conferencing software.</p><p>Students can perform the same exercises as the existing workshops in the virtual system through a web-browser.</p>",
		'process': "<p>The workshops offered for our hardware and software products often received very positive reviews from attendees. One of the most common comments was that the hands-on exercises on the software were incredibly valuable, as the students were able to perform tasks in the same manner that they would need to in their jobs.</p><p>The downside to the workshops is that they relied on specific hardware. For a given workshop, there might be up to four separate machines, each configured differently, to allow the students to gain practice on the full range of systems they are likely to encounter. The hardware led to several costs:</p><p>If the workshop was offered at our headquarters, customers had to bear travel and expense costs to send students.</p><p>It the workshop was offered at the customer site, equipment had to be packed and shipped, and the instructor incurred travel and expense costs.</p><p>In either case, the hardware occasionally required maintenance or replacement as it got damaged or became outdated.</p><p>These costs meant that workshops were often cost-prohibitive for smaller customers. And the long lead time for shipping and setup meant that we could not offer the workshops on short notice, or very frequently through the year.</p><p>We needed a solution that could cut costs and reduce lead time while still maintaining the practical value our customers had come to expect.</p><p>I worked with the development team for the software in question to see if it could be run in a virtual machine instead of the special hardware. They said that it could, but that it would require some development time. So, I set about negotiating some of their development hours to be directed toward that effort. After testing the software on the virtual machines, I needed to find a way to host these in the cloud.</p><p>After some research, I found a solution in Microsoft Azure Labs that could run virtual machines in the cloud, manage multiple user environments centrally, and was affordable for our team. However, the Azure solution only allowed one user to access a particular cloud environment at a time, which meant that the workshop instructor could not access the student environment to help troubleshoot an exercise. After some more research and discussion with others on the team, we settled on using the Netop remote desktop software to allow multiple logins. The eventual full solution allowed the instructor to conduct the lecture portions of the workshop while sharing slides and taking questions, and also allowed the participants to still be able to perform all the hands-on exercises.</p><p>This solution made it possible for us to maintain our standards of quality as well as build a foundation for more remote workshops in the future, that are cheaper to host, cheaper to attend for students, and easier to schedule due to the drastically reduced lead time.</p>"
	},
	{
		'highlight': 'yes',
		'id': 'jobAid',
		'title': 'Product Features Job Aid',
		'type': 'Job Aid',
		'shortDescription': 'This quick reference document gives sellers just information they need about a complex product feature.',
		'tools': 'Microsoft Powerpoint',
		'skills': 'Graphic Design',
		'client': 'Toshiba Global Commerce Solutions',
		'heroShot': 'projects/jobAid/hero.png',
		'heroSource': {
			'original': 'img/stock/close-up-hand-showing-stack-paper-mock-up.jpg',
			'link': 'https://www.freepik.com/freepik',
			'photographer': "freepik",
			'title': "Close-up hand showing a stack of paper mock-up"
		},
		'detailShot': "projects/jobAid/detail.png",
		'problem': 	"",
		'solution': "",
		'process': "",
		'link': "projects/jobAid/content/infographic.pdf"
	},
	{
		'highlight': 'yes',
		'id': 'devWalkthrough',
		'title': 'App Building Walkthrough',
		'type': 'eLearning',
		'shortDescription': 'This eLearning module leads retail technical staff through the process of creating their first app for a point-of-sale extension platform.',
		'tools': 'Articulate Rise, Camtasia',
		'skills': 'Web Development, Instructional Design, Technical Writing',
		'client': 'Toshiba Global Commerce Solutions',
		'heroShot': 'projects/devWalkthrough/hero.jpg',
		'heroSource': {
			'original': 'img/stock/fotis-fotopoulos-LJ9KY8pIH3E-unsplash.jpg',
			'link': 'https://unsplash.com/s/photos/code-dual-monitor?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
			'photographer': "Fotis Fotopoulos",
			'title': "Two Black Flatscreen Computer Monitors"
		},
		'detailShot': '',
		'problem': 	"",
		'solution': "",
		'process': "",
		'link': "projects/devWalkthrough/content/index.html"
	},
	{
		'highlight': 'yes',
		'id': 'productYArchitecture',
		'title': 'Intro to Product Architecture',
		'type': 'eLearning',
		'shortDescription': 'Part of an introductory series to a point of sale solution, this module covers the product architecture and deployment options.',
		'tools': 'Articulate Storyline',
		'skills': 'eLearning, Instructional Design',
		'client': 'Toshiba Global Commerce Solutions',
		'heroShot': 'projects/productYArchitecture/hero.jpg',
		'heroSource': {
			'original': 'img/stock/overhead-view-digital-tablet-coffee-cup-spiral-notebook-with-pencil-wooden-textured-table.jpg',
			'link': 'https://www.freepik.com/freepik',
			'photographer': "freepik",
			'title': "An overhead view of digital tablet; coffee cup and spiral notebook with pencil on wooden textured table"
		},
		'detailShot': "",
		'problem': 	"",
		'solution': "",
		'process': "",
		'link': "projects/productYArchitecture/content/index.html"
	},
	{
		'highlight': 'no',
		'id': 'productxCurricula',
		'title': 'Persona Based Curricula',
		'type': 'Curriculum',
		'shortDescription': 'This document lays out the learning paths for a number of differernt learner personas for an enterprise softeare product.',
		'tools': 'Microsoft Excel, Microsoft Word',
		'skills': 'Curriculum Development',
		'client': 'Toshiba Global Commerce Solutions',
		'heroShot': 'projects/productxCurricula/hero.jpg',
		'heroSource': {
			'original': 'img/stock/laptop-with-colorful-business-documents.jpg',
			'link': 'https://www.freepik.com/freepik',
			'photographer': "freepik",
			'title': "Laptop with colorful business documents"
		},
		'detailShot': '',
		'problem': 	"",
		'solution': "",
		'process': "",
		'link': "projects/productxCurricula/content/ProductXCurricula.pdf"
	},
	{
		'id': 'softwareInstall',
		'sensitive': 'yes',
		'link': 'projects/softwareInstall/content/index.html',
		'client': 'Toshiba Global Commerce Solutions',
		'title': 'Software Installation Walkthrough',
		'type': 'eLearning',
		'tools': 'Camtasia, Articulate Storyline, Audacity',
		'skills': 'Script Writing, Instructional Design, Video Editing, Audio Editing',
		'shortDescription': 'This eLearning module walks learners through a software installation and configuration process, explaining key concepts along the way.',
		'heroShot': 'projects/softwareInstall/hero.jpg',
		'heroSource': {
			'original': 'img/stock/mockup-copy-space-blank-screen-concept.jpg',
			'link': 'https://www.freepik.com/rawpixel-com',
			'photographer': "rawpixel.com",
			'title': "Mockup Copy Space Blank Screen Concept"
		}
	}
]