angular.module( 'loading', [] )

.directive( 'loading', function ( $interval ) {
    return {
        template: '<span>{{display_text}}</span>',
        scope: {},
        link: function ( scope, element, attrs ) {
            scope.display_text = "."
            var update = function () {
                switch ( scope.display_text ) {
                    case ".":
                        scope.display_text = ".."
                        break;
                    case "..":
                        scope.display_text = "..."
                        break;
                    case "...":
                        scope.display_text = "...."
                        break;
                    case "....":
                        scope.display_text = "."
                        break;
                }
            }
            $interval( update, 500 )
        }
    };
} )
