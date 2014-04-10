<?php

namespace alkr\ExtendCMSBundle\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use alkr\CMSBundle\Controller\BlockController as BaseController;
use alkr\CMSBundle\Form\FeedbackType;

class BlockController extends BaseController
{
    public function newsAction(Request $request)
    {
        $em = $this->getDoctrine()->getManager();
        $posts = $em->getRepository('CMSBundle:Post')->findBy(array(),array('date'=>'DESC'),$request->get('max',2),$request->get('offset',0));

        return $this->render(
            'CMSBundle:Block:blocks.html.twig',
            array(
                'items' => $posts,
                'options'=>array(
                    'class'     =>  explode(' ', $request->get('class','')),
                    'type'      =>  $request->get('type','content'),
                    'carousel'  =>  $request->get('carousel',null),
                    'slides'  =>  $request->get('slides',null)
                    )
                )
            );
    }

    public function bannersAction(Request $request)
    {
        $em = $this->getDoctrine()->getManager();
        $banners = $em->getRepository('CMSBundle:Banner')->findBy(array(),array(),$request->get('max',2),$request->get('offset',0));
        return $this->render(
            'CMSBundle:Block:blocks.html.twig',
            array(
                'items' => $banners,
                'options'=>array(
                    'class'     =>  explode(' ', $request->get('class','')),
                    'type'      =>  $request->get('type','gallery'),
                    'carousel'  =>  $request->get('carousel',null),
                    'slides'  =>  $request->get('slides',null)
                    )
                )
            );
    }

    public function sliderAction(Request $request)
    {
        $em = $this->getDoctrine()->getManager();
        $slides = $em->getRepository('CMSBundle:Slide')->findAll();

        return $this->render(
            'CMSBundle:Block:slider.html.twig',
            array(
                'slides' => $slides, 'id'=>$request->get('id',rand()), 'filter'=>$request->get('filter','my_thumb')
                )
            );
    }

    /**
     * @Template()
     */
    public function leftMenuAction()
    {
        $em = $this->getDoctrine()->getManager();
        $repo = $em->getRepository('CMSBundle:Page');
        $pages = $repo->childrenHierarchy($repo->find(69),false,array('childSort'=>array('field'=>'prior')),true);

        return array('pages'=>$pages);
    }

    /**
     * @Template()
     */
    public function mainMenuAction()
    {
        $em = $this->getDoctrine()->getManager();
        $repo = $em->getRepository('CMSBundle:Page');
        $main = $repo->find(69);
        $pages = $repo->childrenHierarchy($main,true,array('childSort'=>array('field'=>'prior')),false);

        return array('pages'=>$pages,'cut_path'=>$main->getPath().'/');
    }
}