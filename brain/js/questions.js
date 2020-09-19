// Quiz Creator;
function CQuiz(que, o1, o2, o3, o4, ans, d) {
	this.question = que;
	this.opt1 = o1;
	this.opt2 = o2;
	this.opt3 = o3;
	this.opt4 = o4;
	this.answer = ans;
	this.asked = d;
}

// Question 1
var q1 = new CQuiz(
	
	'What is a cluster?',
	'A single system made up of servers and other resources',
	'A computer program or device that provides services to other computers',
	'A specific set of ordered operations',
	'A software package that performs a specific function for an end user',
	1,
	0
);
// Question 2
var q2 = new CQuiz(
	'What is a pod in Kubernetes and what does it do?',
	'A collection of physical IT components that supports a group of containers',
	'A collection of logic circuitry that evaluates a computers operational code',
	'Where you find peas',
	'One or more containers grouped together to share resources and run as a unit',
	4,
	0
);

// Question 3
var q3 = new CQuiz(
	'In the context of Kubernetes, what is a container?',
	'An application environment installed on software that imitates dedicated hardware',
	'A package that relies on virtual isolation technology to deploy and run applications that access a shared OS kernel',
	'A large metal box that is used to hold or transport something',
	'A unit that stores data on a computers memory drive',
	2,
	0
);

// Question 4
var q4 = new CQuiz(
	'Generally, what is a proxy service used for?',
	'To supplant an authentic webpage in a search engine index and search page results',
	'To connect external parties and route data between internal and external containers',
	'To act as an intermediary between an endpoint device and another server',
	'To relay connection requests for inbound network traffic',
	3,
	0
);

// Question 5
var q5 = new CQuiz(
	'What is a kubelet?',
	'A node agent that manages pods and their containers',
	'Software that is used to run containers outside of pods',
	'A smaller version of Kubernetes',
	'A device that collects data in an organized manner for easy access',
	1,
	0
);

// Question 6
var q6 = new CQuiz(
	'What is the purpose of a ReplicaSet?',
	'To prevent clones from invading other clusters',
	'To monitor and respond to environmental latency',
	'To duplicate pods',
	'To create and maintain volumes',
	3,
	0
);

// Question 7
var q7 = new CQuiz(
	'What is the mission of the control plane?',
	'To manage clusters of pods',
	'To regulate communication between Kubernetes and clusters',
	'To move workloads from one host to another',
	'To control nodes',
	3,	
	0
);

// Question 8
var q8 = new CQuiz(
	'Which is the intended use for etcd?'
	'To store all the cluster data, maintain its state and provide access to critical data'
	'To link a unique identifier to a value',
	'To encrypt cluster data and send it to a secrets manager',
	'To authenticate cluster data',
	1,
	0
);

// Question 9
var q9 = new CQuiz(
	'what is use of Kubernetes namespace',
	'help different projects, teams, or customers to share a Kubernetes cluster',
	'separate the pods',
	'physical grouing of names',
	'it does nothing',
	1,
	0 
);

// Question 10
var q10 = new CQuiz(
	'kubectl is used for?',
	'used to fire command towords Kubernetes apiserver',
	'its is apiserver',
	'it run inside container engine',
	'it is schedular',
	1,
	0
);

// total question...
var totQ = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
