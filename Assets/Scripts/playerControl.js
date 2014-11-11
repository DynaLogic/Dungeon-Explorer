#pragma strict

var playerAnim : Animator;

function Start () {

}

function Update () {
	if(Input.GetKeyDown(KeyCode.Mouse0))
	{
		playerAnim.SetTrigger("atacking");
		
	}
	if(Input.GetKeyDown(KeyCode.X))
	{
		playerAnim.SetTrigger("dying");
		playerAnim.SetTrigger("running");
	}
	if(Input.GetKeyDown(KeyCode.D))
	{
		playerAnim.SetTrigger("running");
	}
	if(Input.GetKeyUp(KeyCode.D))
	{
		playerAnim.SetTrigger("idle");
	}
	if(Input.GetKey(KeyCode.D))
	{
		transform.Translate(Vector2(10 * Time.deltaTime,0));
	}

}