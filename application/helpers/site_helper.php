<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');

if ( ! function_exists('create_chat_session_directory'))
{
	function create_chat_session_directory()
	{
            $CI =& get_instance();

            $upload_path = FCPATH . 'upload/';
            $directory_name = $CI->session->userdata('session_id');
            $directory_path = $upload_path . $directory_name;

            if( $CI->session->userdata('session_id') ){
                if(!file_exists($directory_path) || !is_dir($directory_path)){
                    mkdir($directory_path);
                }
            }
            
            return $directory_path;
	}
}

if ( ! function_exists('log_chat_message'))
{
	function log_chat_message($who, $input)
	{
            $CI =& get_instance();
            
            $directory_path = create_chat_session_directory();
            $conversation_path = $directory_path . '/conversation.txt';
            
            // add EOL when necessary
            if(!preg_match('/^.*$\n/', $input)){
                    $input .= "\n";
            }
            
            $handler = fopen($conversation_path, 'a') or die("Error opening or creating conversation file");           
            fwrite($handler, date("Y-m-d H:i:s") . " <$who> $input");
            fclose($handler);
	}
}