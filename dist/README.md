## jQuery BBQ Array

The is an extension to  [jQuery BBQ](http://benalman.com/projects/jquery-bbq-plugin/) which allows you to push array elements onto states that are arrays.

## How to use
This is an example of how to use, give the following url:

        index.php#foo[]=bar&foo[]=baz

To remove `baz` do this:

        $.bbq.removeArrayState('foo', 'baz');
        
To set `qux` as a value in `foo`:

        $.bbq.setArrayState('foo', 'qux');

## Will not duplicate
If you call the same twice, it will NOT result in two new values being added

        $.bbq.setArrayState('foo', 'qux');
        $.bbq.setArrayState('foo', 'qux');
        
Will result in this url:

        index.php#foo[]=qux

## Contact
* **In the Loft Studios**
* Aaron Klump - Developer
* <http://www.InTheLoftStudios.com>
