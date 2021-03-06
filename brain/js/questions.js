// Quiz Creator;
function CQuiz(que, o1, o2, o3, o4, ans, d,h) {
	this.question = que;
	this.opt1 = o1;
	this.opt2 = o2;
	this.opt3 = o3;
	this.opt4 = o4;
	this.answer = ans;
	this.asked = d;
	this.hint = h;
}

// Question 1
var q1 = new CQuiz(
	
	'What is a cluster?',
	'A single system made up of servers and other resources',
	'A computer program or device that provides services to other computers',
	'A specific set of ordered operations',
	'A software package that performs a specific function for an end user',
	1,
	0, 
	'Hint : enable high availability, load balancing and parallel processing. A cluster is a logical rather than physical unit. Organizations can include many servers or just a few in a cluster as the applications requirements demand'
);
// Question 2
var q2 = new CQuiz(
	'What is a pod in Kubernetes and what does it do?',
	'A collection of physical IT components that supports a group of containers',
	'A collection of logic circuitry that evaluates a computers operational code',
	'Where you find peas',
	'One or more containers grouped together to share resources and run as a unit',
	4,
	0,
	'Hint In Kubernetes terminology, pods are the smallest unit of container deployment. A pod is a group of one or more containers that share storage, network and operating specifications. Pods live on nodes, with one or more pod on each node'
);

// Question 3
var q3 = new CQuiz(
	'In the context of Kubernetes, what is a container?',
	'An application environment installed on software that imitates dedicated hardware',
	'A package that relies on virtual isolation technology to deploy and run applications that access a shared OS kernel',
	'A large metal box that is used to hold or transport something',
	'A unit that stores data on a computers memory drive',
	2,
	0,
	'Hint Kubernetes provides users with a management system for container-based applications, which is a relief from controlling each individual container. Containers operate on host machines through a shared OS, but they remain isolated from each other to run applications -- unless the administrator connects them'
);

// Question 4
var q4 = new CQuiz(
	'Generally, what is a proxy service used for?',
	'To supplant an authentic webpage in a search engine index and search page results',
	'To connect external parties and route data between internal and external containers',
	'To act as an intermediary between an endpoint device and another server',
	'To relay connection requests for inbound network traffic',
	3,
	0,
	'Hint Kubernetes makes use of several proxy services to manage containers. For example, kube-proxy, a networking and load balancing service, routes traffic to the appropriate container based on the IP address and incoming requests port number. The Kubernetes network proxy runs on each node. Other proxies in Kubernetes include the kubectl proxy and the apiserver proxy.'
);

// Question 5
var q5 = new CQuiz(
	'What is a kubelet?',
	'A node agent that manages pods and their containers',
	'Software that is used to run containers outside of pods',
	'A smaller version of Kubernetes',
	'A device that collects data in an organized manner for easy access',
	1,
	0,
	'Hint The kubelet node agent ensures that containers created by Kubernetes are operational and healthy in accordance with the pod description in a PodsSpec. For example, a kubelet can automatically restart a failed container.'
	
);

// Question 6
var q6 = new CQuiz(
	'What is the purpose of a ReplicaSet?',
	'To prevent clones from invading other clusters',
	'To monitor and respond to environmental latency',
	'To duplicate pods',
	'To create and maintain volumes',
	3,
	0,
	'Hint A ReplicaSet clones a pod at the users discretion and verifies that the correct number of pods runs. A Deployment manages a ReplicaSet'
);

// Question 7
var q7 = new CQuiz(
	'What is the mission of the control plane?',
	'To manage clusters of pods',
	'To regulate communication between Kubernetes and clusters',
	'To move workloads from one host to another',
	'To control nodes',
	3,	
	0,
	'Hint The control plane is a collection of components, such as the Kubernetes master and kubelet, that dictates how Kubernetes communicates with a user cluster. It works to manage and keep a record of Kubernetes Objects by running continuous loops of the system'
);

// Question 8
var q8 = new CQuiz(
	'Which is the intended use for etcd?',
	'To store all the cluster data, maintain its state and provide access to critical data',
	'To link a unique identifier to a value',
	'To encrypt cluster data and send it to a secrets manager',
	'To authenticate cluster data',
	1,
	0,
	'Hint A distributed key-value data store, etcd serves as the backing repository for Kubernetes cluster data. It helps to maintain the cluster configuration and state. Intended for permanent data storage and retrieval, etcd stores metadata and other information consistently with a fault-tolerant method, including full replication'
);

// Question 9
var q9 = new CQuiz(
	'what is use of Kubernetes namespace?',
	'help different projects, teams, or customers to share a Kubernetes cluster',
	'separate the pods',
	'physical grouing of names',
	'it does nothing',
	1,
	0,
	'Hint its used to logical divide the cluster into multiple partation',
);

// Question 10
var q10 = new CQuiz(
	'kubectl is used for?',
	'used to fire command towords Kubernetes apiserver',
	'its is apiserver',
	'it run inside container engine',
	'it is schedular',
	1,
	0,
	'Hint Utility used to send the command to k8 master node'
);

// total question...
var totQ = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
