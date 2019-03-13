var main=document.getElementById("main");
var template;
var x=0;
var x1=0;
var k=0;
var newpostlike_flag=[];
var comment_flag=[];
var comment_state=[];
var data="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popu";
function body(){
	content();
	upload();
	post();
	filter();
	uploadImage();
	hide();
}

function upload(){
		document.getElementById("post-icon").addEventListener('click',function(){
		document.getElementById("frame").style.display="block";
		document.getElementById("upload-text").value="";
		document.getElementById("upload-c").addEventListener('click',function(){
			document.getElementById("frame").style.display="none";
		})
	})
}

function likeColor(x2){
		if(newpostlike_flag[x2]==1)
		{

			document.getElementById("likes"+x2).style.color="#636e72";
			document.getElementById("i-like"+x2).style.color="#636e72";
			newpostlike_flag[x2]=0;
			document.getElementById("emoji"+x2).innerHTML=`0 Likes ${comment_state[x2]} Comments`;
		}
		else{

			document.getElementById("likes"+x2).style.color="#3b5998";
			document.getElementById("i-like"+x2).style.color="#3b5998";
			newpostlike_flag[x2]=1;
			document.getElementById("emoji"+x2).innerHTML=`1 Likes ${comment_state[x2]} Comments`;
	}

}

function comment(x2){
		var c1=document.getElementById("comment-content"+x2);
		if(c1.style.display=="none")
		{
			c1.style.display="block";
			document.getElementById("comment-s"+x2).style.display="inline-block";
			document.getElementById("comment-c"+x2).style.display="inline-block";
			document.getElementById("post").style.height="560px";
		}
		else
			c1.style.display="none";
		document.getElementById("comment-c"+x2).addEventListener('click',function(){
			document.getElementById("comment-s"+x2).style.display="none";
			document.getElementById("comment-c"+x2).style.display="none";
			document.getElementById("comment-content"+x2).value="";
			document.getElementById("comment-content"+x2).style.display="none";
			document.getElementById("post").style.height="500px";
		})

}
function commentStore(x2){
			c2=document.getElementById("comment-content"+x2);
			comment_state[x2]=1;
			comment_flag.push(c2.value);
			document.getElementById("comment-s"+x2).style.display="none";
			document.getElementById("comment-c"+x2).style.display="none";
			document.getElementById("emoji"+x2).innerHTML=`${newpostlike_flag[x2]} Likes ${comment_state[x2]} Comments`;
			document.getElementById("post").style.height="500px";


}

function filter(){
	document.getElementById("filter-icon").addEventListener('click',function(){
		document.getElementById("filter-box").style.display="block";
		document.getElementById("cross").addEventListener('click',function(){
			document.getElementById("filter-box").style.display="none";
		})
	})
}

function forLoop(){
	var template='';
	for(i=1;i<=10;i++)
	{
		template+= `<a href="'index'+${i}+'.html'">${i}</a>`
	}
	return template;
}




function post(){
	document.getElementById("before-image").addEventListener('click',function(){
		if(document.getElementById("upload-text").value)
		{
			x++;
			newpostlike_flag.push(0);
			comment_state.push(0);
			var newdata=document.getElementById("upload-text").value;
			var newpost=document.getElementById('newpost'+x);
			var d=new Date();
			newpost.innerHTML=`
			<div id="post">
			<div id="header">
				<img src="avatar.png" id="avatar">
				<div id="name">
					<h4 id="name-header" >Ujjwal Verma</h4>
					<p id="time"> At &nbsp;${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}</p>
				</div>
			</div>
			<div id="description">
				${newdata}
			</div>
			<div id="picture">
				<img src="" id="image${x}" class="class-image">
			</div>
			<div id="footer">
				<div id="emoji${x}">
						<p id="emoji-content">${newpostlike_flag[x]} Likes ${comment_state[x]} Comments</p>
				</div>
				<div id="divider"></div>
				<div id="like">
					<div id="like-outer${x}" class="like-outer" onclick="likeColor(${x})"><i class="class-like fas fa-thumbs-up" id="i-like${x}"></i><input type="submit" id="likes${x}" class="button" value="Like"></div>
					<div id="comment-outer${x}" class="comment-outer" onclick="comment(${x})"><i class="class-comment fas fa-comment" id="i-comment${x}"></i><input type="submit" id="comment" class="button" value="Comment"></div>
					<div id="share-outer11" class="share-outer"><i class="class-share fas fa-share" id="id-share"></i><input type="submit" id="share" class="button" value="Share"></div>
				</div>
				<div id="divider2"></div>
				<div id="comment-section">
					<input type="text" id="comment-content${x}" class="comment-text">
					<input type="submit" id="comment-s${x}" onclick="commentStore(${x})" class="comment-button" value="Comment"><input type="submit" id="comment-c${x}" class="comment-button" value="Cancel">
				</div>
			</div>
		</div>`;
			console.log(x);
			document.getElementById("newpost"+x).style.display="none";

		}
		})
}

function hide() {
	document.getElementById("upload-u").addEventListener('click',function(){

		document.getElementById("frame").style.display="none";
		document.getElementById("newpost"+x).style.display="block";
	})
}
function uploadImage(){
	if(this.files&&this.files[0])
	{
		var obj=new FileReader();
		obj.onload=function(data){
		var image=document.getElementById("image"+x);
		image.src=data.target.result;
	}
	obj.readAsDataURL(this.files[0]);
	}
}

function mostLiked(){
	var liked=document.getElementById("most-liked");
	if(liked.checked)
	{
		for(var i=0;i<newpostlike_flag.length;i++)
		{
			if(newpostlike_flag[i]==0)
				document.getElementById("newpost"+i).style.display="none";
		}
	}
	document.getElementById("filter-box").style.display="none";

}

function mostCommented(){
	var commented=document.getElementById("most-commented");
	if(commented.checked)
	{
		for(var i=0;i<comment_state.length;i++)
		{
			if(comment_state[i]==0)
				document.getElementById("newpost"+i).style.display="none";
		}
	}
	document.getElementById("filter-box").style.display="none";
}


function content(){
	var d=new Date();
	newpostlike_flag.push(0);
	comment_state.push(0);
	template=`
	<div id="innerContent">
		<div id="main-header">
			<div id="post-icon">
				<i class="fas fa-paper-plane" id="paper-plane"></i>
				<input type="submit" id="hit-upload" value="Post">
			</div>
			<div id="filter-icon"> 
				<i class="fas fa-filter" id="filter"></i>
				<input type="submit" id="hit-filter" value="Filters">
			</div>
		</div>
		<div id="upload"> 
					<div id="modal-content">
						<div id="frame">
							<div id="upload-header">
								<h2 >Create Post</h2>
							</div>
							<div id="divider"></div>
							<br>
							<br>
							<div id="upload-description">
								<input type="text" placeholder="Write something here" id="upload-text">
							</div>
							<br>
							<button id="before-image">Confirm</button>
							<br>
							<br>
							<input type="file" id="input-image" onchange="uploadImage.call(this)">
							<div id="upload-footer">
								<input type="submit" value="Upload" id="upload-u">
								<input type="submit" value="Cancel" id="upload-c">
							</div>
							<p id="disclaimer">Disclaimer: Press Confirm first then hit upload</p>
						<div>
					</div>
		</div>
		<div id="filter-box">
			<div id="filter-modal">
				<div id="filter-frame">
					<center><h3>Filters</h3></center>
					<i class="fas fa-times" id="cross"></i>
					<hr>
					Most liked<input type="checkbox" id="most-liked" onclick="mostLiked()">
					<br>
					<hr>
					Most commented<input type="checkbox" id="most-commented" onclick="mostCommented()">
					<br>
				</div>
			</div>
		</div>
		<br>
		<br>
		<br>
		<div id="newpost10"></div>
		<div id="newpost9"></div>
		<div id="newpost8"></div>
		<div id="newpost7"></div>
		<div id="newpost6"></div>
		<div id="newpost5"></div>
		<div id="newpost4"></div>
		<div id="newpost3"></div>
		<div id="newpost2"></div>
		<div id="newpost1"></div>
		<div id="newpost0">
		<div id="post">
			<div id="header">
				<img src="avatar.png" id="avatar">
				<div id="name">
					<h4 id="name-header" >Ujjwal Verma</h4>
					<p id="time"> At &nbsp${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}</p>
				</div>
			</div>
			<div id="description">
				Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popu"
			</div>
			<div id="picture">
				<img src="landscape2.jpeg" id="image${x1}" class="class-image">
			</div>
			<div id="footer">
				<div id="emoji${x1}">
				${newpostlike_flag[x1]} Likes ${x1} Comments
				</div>
				<div id="divider"></div>
				<div id="like">
					<div id="like-outer${x1}" class="like-outer" onclick="likeColor(${x1})"><i class="class-like fas fa-thumbs-up" id="i-like${x1}"></i><input type="submit" id="likes${x1}" class="button" value="Like"></div>
					<div id="comment-outer${x1}" class="comment-outer" onclick="comment(${x1})"><i class="class-comment fas fa-comment" id="i-comment${x1}"></i><input type="submit" id="comment" class="button" value="Comment"></div>
					<div id="share-outer11" class="share-outer"><i class="class-share fas fa-share" id="id-share"></i><input type="submit" id="share" class="button" value="Share"></div>
				</div>
				<div id="divider2"></div>
				<div id="comment-section">
					<input type="text" id="comment-content${x1}" class="comment-text">
					<input type="submit" id="comment-s${x1}" onclick="commentStore(${x1})" class="comment-button" value="Comment"><input type="submit" id="comment-c${x1}" class="comment-button" value="Cancel">
				</div>
			</div>
		</div>
		</div>
		<div id="pagination">
			<center>${forLoop()}</center>
	</div>`
	main.innerHTML=template;
}



body();
