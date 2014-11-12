#pragma strict
/**
TODO
no movement when ded
play animations for walking / running
make a damn game!!!!!!!
*/
var playerAnim : Animator;
var speed : float = 10.0;
private var h : float;
private var scale : Vector2;
private var playerDead : boolean = false;
private var facingRight : boolean = true;

function Start () {

}

function Update () {
	playerDead = playerAnim.GetBool("Dead");
	if(!playerDead)
	{
		Move();
	}else
	onDeath();
	
	if(Input.GetAxis("Atack"))
	{
		playerAnim.SetTrigger("atacking");
		
	}
	if(Input.GetKeyDown(KeyCode.X))
	{
		playerAnim.SetTrigger("dying");
		playerAnim.SetTrigger("running");
		playerAnim.SetBool("Dead",true);
	}
}

function Move()
{
	//set the var movement to movement direction (1 or -1) * speed
	var movement : float = Input.GetAxis("Horizontal") * speed;
	h = Input.GetAxis("Horizontal");
	
	//set movement to speed per second vs speed per frame
	movement *= Time.deltaTime;
	
	//translate player in directopn of movement
	transform.Translate(movement,0,0);
	ChangeDirection();
}

function ChangeDirection()
{
	//if positive movement and facing left, flip
	if (h > 0 && !facingRight)
	{
		flip();
	}else if(h < 0 && facingRight)
	{
		flip();
	}
}

function flip()
{
	facingRight = !facingRight;
	scale = transform.localScale;
	scale.x *= -1;
	transform.localScale = scale;
}

function onDeath()
{
	if (!facingRight)
	{
		flip();
	}
}
